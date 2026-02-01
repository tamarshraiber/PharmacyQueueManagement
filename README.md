💊 Pharmacy Queue Management System
📖 Description

Pharmacy Queue Management System is a full-stack application built with C#, .NET Core, Angular 19, and SQL Server, designed to efficiently manage queues in a pharmacy.

This project was developed as a collaborative effort and demonstrates real-time updates, role-based interfaces, and database connectivity.

⚠️ Note: To run this project, you need a local SQL Server database. Update the connection string in appsettings.json to match your server settings (server name, database name, and authentication credentials).

📌 Features

🧑‍💻 Role-based interfaces:

👤 User Interface – View queue status and join the queue

💊 Pharmacist Interface – Manage the queue and serve customers

🛠️ Admin Interface – Manage users, pharmacists, and system settings

⏱️ Real-time queue management:

⚡ Instant updates

🔄 Asynchronous handling

🌐 Synchronization across all interfaces

🔒 Authentication & Security:

🛡️ JWT Token-based authentication

🗄️ Database:

💾 SQL Server backend

📊 Stores queue data, user info, and role-specific data

⚙️ Technology Stack

Backend: C# with .NET Core

Frontend: Angular 19

Database: SQL Server

Security: JWT Token authentication

💻 Screenshots / Demo

🌐 Project Repository

⚠️ Tip: Add screenshots or GIFs of your app in action to make the README visually appealing.

🛠️ Installation & Setup
1. Clone the repository
git clone <repository-url>

2. Set up your SQL Server database

Create the required database

Run db.script.sql to generate tables and initial data

Update the connection string in appsettings.json with your server name, database name, and authentication credentials

3. Run the backend
dotnet run

4. Navigate to the Angular frontend folder
cd frontend-folder
npm install
ng serve

5. Open the application

Open your browser and navigate to:

http://localhost:4200

🚀 Usage

Users: Join the queue and see their position in real-time

Pharmacists: Manage the queue and serve customers efficiently

Admins: Monitor the system, manage users, and configure settings

⚠️ Tip: Ensure your database connection is correct before running. All actions are secured via JWT authentication.
