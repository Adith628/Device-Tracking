# Real-time Location Sharing App

This is a real-time location-sharing application built using **Express.js**, **Socket.io**, and **EJS** for templating.

## Features

- **WebSocket Support**: Real-time communication using WebSockets via Socket.io.
- **Location Sharing**: Users can send their current location, and it will be broadcast to all connected clients.
- **User Disconnect Event**: When a user disconnects, it notifies all remaining users.

## Technologies Used

- **Express.js**: Web framework for handling HTTP requests and static files.
- **Socket.io**: Real-time bidirectional communication between clients and the server.
- **EJS**: Templating engine for rendering views.
- **HTML/CSS/JS**: For building the front-end.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)

## Installation

1. Clone the repository:

   `\bash
   git clone https://github.com/your-username/real-time-location-app.git
   cd real-time-location-app
   `

2. Install the dependencies:

   `
   npm install
   `

3. Start the server:

   `bash
   npm start
 `

4. Open your browser and go to:

   `
   http://localhost:3000
  `
