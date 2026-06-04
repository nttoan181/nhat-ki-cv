const express = require('express');
const multer = require('multer');
const Database = require('better-sqlite3');
const path = require('path');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = Date.now() + '-' + Math.round(Math.random() * 1e9) + ext;
    cb(null, name);
  }
});

const upload = multer({ storage });

const db = new Database(path.join(__dirname, 'data.db'));
db.prepare(`CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  taskId TEXT,
  status TEXT,
  description TEXT,
  imageUrl TEXT,
  timestamp INTEGER
)`).run();

const existingColumns = db.prepare("PRAGMA table_info(tasks)").all();
if (!existingColumns.some(col => col.name === 'description')) {
  db.prepare('ALTER TABLE tasks ADD COLUMN description TEXT').run();
}

app.post('/upload', upload.single('file'), (req, res) => {
  try {
    const { taskId, status, description } = req.body;
    const fileUrl = req.file ? `/uploads/${req.file.filename}` : null;
    const ts = Date.now();
    db.prepare('INSERT INTO tasks (taskId,status,description,imageUrl,timestamp) VALUES (?,?,?,?,?)')
      .run(taskId || null, status || null, description || null, fileUrl, ts);
    res.json({ url: fileUrl });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Upload failed' });
  }
});

app.use('/uploads', express.static(uploadDir));

app.get('/tasks', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM tasks ORDER BY id DESC').all();
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read tasks' });
  }
});

app.get('/download-db', (req, res) => {
  try {
    const dbPath = path.join(__dirname, 'data.db');
    res.download(dbPath, 'worklog-tasks.db');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to download database' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Upload server running at http://127.0.0.1:${port}`));
