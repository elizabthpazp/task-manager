# 📝 Task Manager

A task management application built with **React** and styled using **Material UI**, deployed on **AWS Amplify**.  
It allows you to create, edit, delete, and organize tasks efficiently. Perfect for staying productive and focused on your daily goals.

## 🚀 Live Demo

🔗 [View Live App](https://dev.d2c5zqiv6i5agj.amplifyapp.com/) 

## 🛠️ Tech Stack

- ⚛️ **React** – Library for building user interfaces.
- 🎨 **Material UI (MUI)** – React component library for fast and beautiful UI development.
- ☁️ **AWS Amplify** – Hosting and CI/CD for the frontend.
- 🧠 **AWS Lambda + MongoDB Atlas** – Handles backend logic and data persistence.


## 📂 Project Structure

```bash
task-manager/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/ 
│   └── App.jsx
├── amplify/ (generated by AWS Amplify)
├── .gitignore
├── package.json
├── README.md
```

## ✨ Features

- ✅ Add new tasks
- ✏️ Edit existing tasks
- 🗑️ Delete tasks
- 📌 Mark tasks as completed / in progress / done 
- ✨ Display tasks in a chart
  
## ⚙️ Run Locally

Clone the repository:

```bash
git clone https://github.com/your-username/task-manager.git
```

Install dependencies:

```bash 
npm install
```

Start the development server:

```bash
npm start
```

## 🚀 Deploy with Amplify

This project is configured to auto-deploy with every push to the main branch.
You can connect your repository to AWS Amplify and use the following build settings:

```bash
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

## 👩🏻‍💻 Author

Elizabeth de la Paz

Frontend Developer | Passionate about code and productivity 🚀

💜 [elizabthpazp](https://github.com/elizabthpazp)
