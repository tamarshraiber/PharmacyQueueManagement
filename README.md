# 💊 Pharmacy Queue Management System

## 📖 Description
**Pharmacy Queue Management System** is a full-stack application built with **C#**, **.NET Core**, **Angular 19**, and **SQL Server**, designed to efficiently manage queues in a pharmacy.

This project was developed as a collaborative effort and demonstrates **real-time updates**, **role-based interfaces**, and **database connectivity**.

> ⚠️ **Note:** To run this project, you need a local **SQL Server** database. Update the connection string in `appsettings.json` to match your server settings.

---

## 📌 Features
- 🧑‍💻 **Role-based interfaces:**
  - 👤 **User Interface** – View queue status and join the queue
  - 💊 **Pharmacist Interface** – Manage the queue and serve customers
  - 🛠️ **Admin Interface** – Manage users, pharmacists, and system settings
- ⏱️ **Real-time queue management**
  - ⚡ Instant updates
  - 🔄 Asynchronous handling
  - 🌐 Synchronization across all interfaces
- 🔒 **Authentication & Security**
  - 🛡️ JWT Token-based authentication
- 🗄️ **Database**
  - 💾 SQL Server backend
  - 📊 Stores queue data, user info, and role-specific data

---

## ⚙️ Technology Stack
- **Backend:** C# with .NET Core  
- **Frontend:** Angular 19  
- **Database:** SQL Server  
- **Security:** JWT Token authentication  

---


## 🛠️ Installation & Setup
1. Clone the repository:  
   ```bash
   git clone <https://github.com/tamarshraiber/PharmacyQueueManagement>

Set up your SQL Server database and update the connection string in appsettings.json.

Run the backend:

dotnet run


Navigate to the Angular frontend folder and run:

npm install
ng serve


Open the application at http://localhost:4200

🚀 Usage

Users can join the queue and see their position in real-time

Pharmacists can manage the queue and serve customers efficiently

Admins can monitor the system, manage users, and configure settings

⚠️ Tip: All actions are secured via JWT authentication. Ensure your database connection is correct.
