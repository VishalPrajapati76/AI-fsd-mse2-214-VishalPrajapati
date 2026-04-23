Student Grievance Management System

A full-stack web application developed using the MERN stack for students to register complaints related to academics, hostel, transport, and administration, track complaint status, search grievances, update submissions, and manage their profile securely.

Tech Stack

Frontend:

React (Vite)
React Router DOM
Axios
CSS

Backend:

Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
bcrypt password hashing
Features
Student Registration and Login
Secure JWT Authentication
Protected Dashboard
Submit New Grievance
View All Grievances
Search Grievances by Title
Update Existing Grievances
Delete Grievances
Complaint Accordion View (Open to read full details)
Student Profile Section
Change Password / Forgot Password UI
Logout
Project Structure
student-grievance-system/
├── backend/
├── frontend/
└── README.md
MongoDB Schemas

Student:

Name
Email (Unique)
Password (Hashed)

Grievance:

Title
Description
Category
Date
Status
API Endpoints

Authentication:

POST /api/register
POST /api/login

Grievances:

POST /api/grievances
GET /api/grievances
GET /api/grievances/:id
PUT /api/grievances/:id
DELETE /api/grievances/:id
GET /api/grievances/search?title=xyz
Installation

Clone Repository

git clone https://github.com/yourusername/student-grievance-system.git
cd student-grievance-system

Backend Setup

cd backend
npm install
npm run dev

Frontend Setup

cd frontend
npm install
npm run dev
Environment Variables

Create .env in backend:

MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000

**Security Features**
Password hashing using bcrypt
JWT-based authentication
Protected routes using middleware
Duplicate email handling
Unauthorized access handling
Future Enhancements
Admin Panel for grievance resolution
Email notifications
Complaint tracking IDs
Status analytics dashboard
Forgot password via OTP/email
