# Task Management System
A simple task management system built with Next.js, Tailwind CSS, and Golang, deployed on Vercel.

## 📌 Features
- 📋 **Task Management** – Create, update, and delete tasks.
- 🎨 **Responsive UI** – Minimal and clean design using Tailwind CSS.
- ☁️ **Deployed on Vercel** – Accessible from anywhere.

## 🔗 Live Demo
- **Frontend:** [[Frontend URL](https://zocket-task-manager-cgvm.vercel.app/)](#)


## 🛠️ Tech Stack
- **Frontend:** Next.js, TypeScript, Tailwind CSS
- **Backend:** Golang, MongoDB
- **Deployment:** Vercel (Frontend), Render/Fly.io (Backend)

## 📦 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/monganotmango/zocket-task-manager.git
cd zocket-task-manager
```

### 2️⃣ Backend Setup
```bash
cd task-manager
go mod tidy
go run main.go
```

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

## 📌 How to Use
1️⃣ Open [http://localhost:3000](http://localhost:3000) in your browser.  
2️⃣ Add, update, or delete tasks.  
3️⃣ Changes are reflected instantly on the UI.

## 📜 Notes
- This project was developed as part of a technical assessment.
- The system does not include authentication.
- The frontend is deployed on Vercel, and the backend is hosted on Render/Fly.io.
