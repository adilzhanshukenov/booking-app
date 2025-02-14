# 🏨 Booking App

A simple **hotel booking application** built with **React, MobX, and TypeScript**. Users can:
- Select date ranges to check room availability.
- Filter rooms based on specifications (bedrooms, price, view).
- Book available rooms.

## 🚀 Features
- **Date-based Room Availability Check**
- **Room Filtering by Attributes**
- **Booking System with MobX State Management**

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, MobX
- **State Management:** MobX
- **Styling:** CSS

## 📂 Project Structure
```
📦 booking-app
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.css
│   ├── App.tsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── book-room-form
│   │   ├── dates
│   │   ├── filter-bar
│   │   ├── filter-form
│   │   ├── footer
│   │   ├── header
│   │   ├── main
│   │   ├── results
│   │   ├── room-card
│   │   └── shared
│   ├── index.css
│   ├── main.tsx
│   ├── stores
│   │   ├── modalStore
│   │   └── roomstore
│   └── vite-env.d.ts
├── structure.txt
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## 📦 Installation
1. **Clone the repository**
```sh
git clone https://github.com/adilzhanshukenov/booking-app.git
cd booking-app
```

2. **Install dependencies**
```sh
yarn install  # or npm install
```

3. **Start the application**
```sh
yarn dev  # or npm run dev
```

## 🔧 Usage
- **Filter rooms**: Choose number of bedrooms, max price, or view type.
- **Select dates**: Pick check-in and check-out dates.
- **Check availability**: Available rooms will be displayed.
- **Book a room**: Click "Book" to reserve a room.

## 📜 License
This project is licensed under the **MIT License**.

---
👨‍💻 **Developed by [Adilzhan Shukenov]**

