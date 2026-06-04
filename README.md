# ⛓️ Blockchain Work Log System

Blockchain-based work log management system using Solidity, MetaMask, Remix IDE, HTML, CSS, JavaScript and Ethers.js.


# 📌 Introduction

Blockchain Work Log System is a decentralized application (DApp) developed to manage and store work history securely using Blockchain technology.

The system allows users to create tasks, update task status and track all work activities through a chain of linked blocks.

Each operation creates a new block containing work information, timestamp and cryptographic hash to ensure transparency, integrity and immutability.

The system integrates:

* 🌐 Web Management Dashboard
* ⛓️ Solidity Smart Contract
* 🔐 MetaMask Wallet Connection
* 📋 Work History Tracking
* 🖼️ Task Evidence Image Upload
* 🔍 Blockchain Validation
* 🧠 Hash-based Data Integrity


# 🚀 Features

## ✅ Add New Task

Users can create a new task by entering:

* Task ID
* Description
* Status
* Evidence Image

The system creates a new Blockchain block for every task.


## ✅ Update Task Status

Users can update task status:

* Pending
* In Progress
* Completed

Every update creates a new block instead of modifying old data.


## ✅ Upload Evidence Images

Users can attach images related to the task.

The system stores image information together with task records.


## ✅ Blockchain History Tracking

View complete work history including:

* Block Index
* Task ID
* Description
* Status
* Timestamp
* Previous Hash
* Current Hash


## ✅ MetaMask Integration

Connect to Blockchain through MetaMask.

Functions include:

* Wallet Connection
* Transaction Signing
* Smart Contract Interaction
* Transaction Confirmation


## ✅ Blockchain Validation

Verify Blockchain integrity through:

* Hash Verification
* Previous Hash Verification
* Chain Validation


## ✅ Smart Contract Storage

Store all work logs securely through Solidity Smart Contract.


# 🧠 Technologies Used

* HTML5
* CSS3
* JavaScript
* Ethers.js
* Solidity
* Ethereum Blockchain
* MetaMask
* Remix IDE
* Live Server (VS Code)

# 📂 Project Structure

```bash
worklog_project/
│
├── index.html
├── server.js
├── package.json
│
├── contracts/
│   └── WorkLog.sol
│
├── abi/
│   └── WorkLogABI.json
│
├── assets/
│
└── README.md



# ⚙️ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/yourusername/blockchain-worklog.git
```


## 2️⃣ Open Project

```bash
cd blockchain-worklog
```


## 3️⃣ Deploy Smart Contract

Open Remix IDE:

```bash
https://remix.ethereum.org
```

Compile and deploy:

```solidity
WorkLog.sol
```

using MetaMask.


## 4️⃣ Configure Contract Address

Update:

```javascript
const contractAddress = "YOUR_CONTRACT_ADDRESS";
```

inside:

```javascript
index.html
```

or

```javascript
app.js
```


## 5️⃣ Run Application

Using VS Code Live Server:

```bash
Right Click → Open with Live Server
```

or

```bash
http://127.0.0.1:5500
```

# 🌐 Web Dashboard

Open browser:

```bash
http://127.0.0.1:5500
```

Features:

* Connect Wallet
* Add Task
* Update Task
* Upload Image
* View Blockchain
* Validate Blockchain


# ⛓️ Smart Contract

The system uses Solidity Smart Contract to manage all Blockchain operations.

Main functions:

```solidity
addTask()
updateTask()
getBlock()
getAllBlocks()
validateChain()
```


# 📊 System Workflow

```text
User
   ↓
Web Interface
   ↓
JavaScript + Ethers.js
   ↓
MetaMask Wallet
   ↓
Smart Contract
   ↓
Blockchain Storage
   ↓
Task History Viewer
```


# 🔐 Blockchain Structure

Example Block:

```json
{
    "index": 5,
    "timestamp": 1778829791,
    "taskId": "TASK001",
    "description": "Create project proposal",
    "status": "In Progress",
    "image": "task001.jpg",
    "previousHash": "0x72abf1...",
    "hash": "0x9cd54e..."
}
```

Each block contains:

* Index
* Timestamp
* Task ID
* Description
* Status
* Image
* Previous Hash
* Current Hash

---

# 📷 Screenshots

## Main Dashboard

* Connect Wallet
* Add Task
* Upload Evidence Image
* Update Status


## MetaMask Transaction

* Transaction Confirmation
* Gas Information
* Smart Contract Interaction

## Blockchain History

* Task History
* Hash Information
* Blockchain Validation

# 📈 Future Improvements

* User Authentication
* Role-Based Access Control
* IPFS Image Storage
* Mobile Application
* Real-Time Notifications
* Ethereum Mainnet Deployment
* Advanced Analytics Dashboard
* Multi-user Collaboration


# 👨‍💻 Author

Toàn Kẹo

Project:

Blockchain Work Log System


# 📜 License

This project is developed for educational, research and Blockchain learning purposes.
## Poster
<img width="1500" height="2167" alt="nguyễn-tất-toàn" src="https://github.com/user-attachments/assets/02978713-935f-49e6-a0ce-2bebf1558614" />

