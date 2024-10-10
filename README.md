# Disney Park Reservation System

This project is a Disney Park Reservation System that allows users to make and manage event reservations. It includes a Node.js backend with Express and MongoDB for data persistence and a React.js frontend for the user interface.

## Features
- **Create Reservations**: Users can create reservations for specific events.
- **View Reservations**: List and view all the reservations in the system.
- **Technologies**:
  - MongoDB for the database.
  - Express.js for building the server-side API.
  - React.js for the frontend.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **React.js**
- **Mongoose**

## How to Run Locally

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** installed and running on your local machine or a MongoDB cloud instance (e.g., MongoDB Atlas).

### Steps
1. **Clone the repository**:
   git clone https://github.com/brettr7388/disney-park-reservation.git
   cd disney-park-reservation
2. Set up environment variables:
   Create a .env file in the root directory and add your MongoDB URI and port configuration:
    MONGO_URI=your-mongodb-uri
    PORT=5001
3. Install backend dependencies:
   npm install
4. Start the backend server:
   npm start
5. Navigate to the frontend:
   cd client
6. Install frontend dependecies
   npm install
7. Start the frontend server:
   npm start
8. Open the app in your browser:
    Frontend:http://localhost:3000
    Backend API: http://localhost:5001/api/reservations


   




