Local upload server for WorkLog

1) Install dependencies

```bash
npm install
```

2) Run server

```bash
node server.js
# or npm start
```

Server endpoints:
- POST /upload  (form-data: file)
  - returns { url: '/uploads/<filename>' }
- GET /tasks
  - returns list of uploaded task metadata
- Static files served at /uploads

Notes:
- CORS enabled so frontend on Live Server can call it.
- This is a simple dev server. For production, use S3 or a proper file store.

Open the SQLite database with DB Browser
- The server creates `data.db` in the project root (`c:\Users\win 11\Downloads\nhật kí cv\data.db`).
- You can open this file directly in DB Browser for SQLite to inspect `tasks` table.

When uploading via the frontend, the request includes `taskId` and `status`, so records inserted into `tasks` will have these values along with `imageUrl` and `timestamp`.
