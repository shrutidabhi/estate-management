# 🏡 Estate Management System (MERN Stack)

A full-stack estate/property management web app built with the MERN stack (MongoDB, Express, React, Node.js).

## 🔥 Features

- Admin & User Authentication
- Add, Edit, Delete Properties
- realtime chat application
- Dashboard with property analytics
- Responsive UI

## 🛠️ Tech Stack

- Frontend: React, Tailwind CSS / Bootstrap
- Backend: Node.js, Express.js
- Database: MongoDB
- Deployment: Render (backend), Vercel (frontend)

## 🌐 Live Demo

- Frontend: [estate-frontend.vercel.app](https://your-vercel-url)
- Backend: [estate-backend.onrender.com](https://your-render-url)

---

## 📸 UI Screenshots
![WhatsApp Image 2025-04-07 at 10 55 10_c71f45a3](https://github.com/user-attachments/assets/e33581d4-67b9-4116-a295-5cbecc4e8d64)
![WhatsApp Image 2025-04-07 at 10 59 29_0b8e9fee](https://github.com/user-attachments/assets/54203781-e5a5-4b0d-959d-0e9af140fdf3)
![WhatsApp Image 2025-04-07 at 11 02 21_6d9eeb3a](https://github.com/user-attachments/assets/44a5b0be-40c7-4aad-af25-27a674329bfd)
![WhatsApp Image 2025-04-07 at 11 03 58_f96ced23](https://github.com/user-attachments/assets/1c8fc90a-4ea1-45bd-8e02-dc56e903441d)


## 📁 Project Structure
estate-management/
├── client/                      # React frontend
│   ├── public/                  # Static files (index.html, etc.)
│   ├── src/
│   │   ├── components/          # Reusable React components
│   │   ├── pages/               # Page-level components
│   │   ├── App.js               # Main React component
│   │   ├── index.js             # React entry point
│   │   └── ...                  # Other files (CSS, images, etc.)
│   ├── package.json             # Frontend dependencies & scripts
│   └── .env                     # Frontend environment variables
│
├── server/                      # Node.js + Express backend
│   ├── config/                  # MongoDB config (e.g., db.js)
│   ├── controllers/             # Controller functions (logic)
│   ├── middleware/              # Auth or error-handling middlewares
│   ├── models/                  # Mongoose models/schemas
│   ├── routes/                  # Express routes
│   ├── server.js                # Entry point for Express server
│   ├── package.json             # Backend dependencies & scripts
│   └── .env                     # Backend environment variables 
│
├── README.md                    # Project description & instructions
├── .gitignore                   # Git ignored files/folders
└── screenshots/                 # (Optional) You can add UI images here
    ├── homepage.png             # UI Screenshot example
    ├── dashboard.png

