// Q.2) Express.js application to include middleware for parsing request bodies (e.g., 
//     JSON, form data) and validating input data. 


// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const { run } = require('node:test');
const { Server } = require('http');

// Initialize the Express app
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware to validate input data for a specific route
function validateUserData(req, res, next) {
    const { name, age } = req.body;

    // Check if name and age are present in the request body
    if (!name || typeof name !== 'string') {
        return res.status(400).json({ error: 'Invalid or missing "name" field' });
    }
    if (!age || typeof age !== 'number' || age <= 0) {
        return res.status(400).json({ error: 'Invalid or missing "age" field' });
    }

    // If validation passes, continue to the next middleware/handler
    next();
}

// Route to handle POST requests to /users, with validation middleware
app.post('/users', validateUserData, (req, res) => {
    const { name, age } = req.body;
    res.status(201).json({ message: 'User data received', user: { name, age } });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// ______________________________________________
// How to run

// 1.Save this code as filename.js (Q2.js)
// 2.Start the Server
//     type terminal = node Q2.js
// 3.The server should be running on = http://localhost:3000.

// 4.Open the Postman application on your computer.
// 5.Select POST from the dropdown menu 
// 6.URL: Enter       http://localhost:3000/users      as the request URL
// 7.Go to the Body tab 
// 8.Select raw and then choose JSON
// 9.Enter your JSON data. Here’s an example of valid JSON data

//     ***1.Valid Data***

//         {
//         "name": "John",
//         "age": 25
//         }

// 10.Click on the Send button.

// 11.You should receive a response like this:(postman output)

//         {
//         "message": "User data received",
//         "user": {
//             "name": "John",
//             "age": 25
//         }
//         }
// ____________________________________________________________
// ***2. Invalid*** Data (e.g., Missing Age)
// Change the JSON body to:

//         {
//         "name": "John"
//         }
// Send the request again.
// The server will respond with a validation error:(postman output)

//         {
//         "error": "Invalid or missing \"age\" field"
//         }