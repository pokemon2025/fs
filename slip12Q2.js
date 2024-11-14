// Q.2) Develop an Express.js application that defines routes for Create operations  
// on a resource (User).  


const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory data store for users
let users = [];

// POST route to create a new user
app.post('/create-user', (req, res) => {
  const { name, email, age } = req.body;

  // Validate input data
  if (!name || !email || !age) {
    return res.status(400).json({ message: 'All fields (name, email, age) are required.' });
  }

  // Create a new user object
  const newUser = { name, email, age };

  // Add new user to the users array
  users.push(newUser);

  // Respond with success message and user data
  res.status(201).json({
    message: 'User created successfully!',
    user: newUser
  });
});

// Set the port and start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// // __________________________________________________________________-
// // How to Run:

// //  1.Save code =Q2.js
// // 2.type terminal = node Q2.js  (server is running)


// ***(CREATE)***

// 1.**Test Postman:**

//         Method: POST

//         URL= http://localhost:4000/create-user

//         JSON CODE=

//             {
//               "name": "John Doe",
//               "email": "john.doe@example.com",
//               "age": 28
//             }

//       **Output = (Success):
      
//             {
//               "message": "User created successfully!",
//               "user": {
//                 "name": "John Doe",
//                 "email": "john.doe@example.com",
//                 "age": 28
//               }
//             }
