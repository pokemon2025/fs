// Q.2) Develop an Express.js application that defines routes for Create and Read operations 
// on a resource (User). 


// Import the Express module
const express = require('express');
const app = express();

// Use middleware to parse JSON request bodies
app.use(express.json());

// In-memory user database (you can replace this with a real database like MongoDB)
let users = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' }
];

// Route to create a new user (POST)
app.post('/users', (req, res) => {
  const newUser = req.body; // Get user data from the request body

  // Validation to ensure the required fields are provided
  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ message: 'User name and email are required.' });
  }

  // Assign a new ID (for simplicity, we use the length of the users array)
  newUser.id = users.length + 1;

  // Add the new user to the in-memory "database"
  users.push(newUser);

  // Respond with the newly created user
  res.status(201).json(newUser); // Created
});

// Route to get all users (GET)
app.get('/users', (req, res) => {
  res.status(200).json(users); // Return the list of all users
});

// Set the server to listen on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



// ___________________________________________

// How to Run:

// 1.Open a terminal type = node Q2.js
// 2.server will start

// ***(CREATE)***

//  **** Test the POST request**** .......  POSt madhe =..........Users 3 add kela

// 3.Open Postman
// 4.select type = POST.
// 5.Enter the URL = http://localhost:3000/users
// 6.Go to the "Body" tab  select raw. Then choose JSON
// 7.Add the JSON data 
            // {
            //     "name": "Mark Taylor",
            //     "email": "mark.taylor@example.com"
            // }
  
// 8.Click Send.

// 9.postman post output is 
            // {
            //     "id": 3,
            //     "name": "Mark Taylor",
            //     "email": "mark.taylor@example.com"
            //   }
        
  
// ***(READ)***

// ****Test the GET request****  .......  GET madhe =..........Users 3 display kela

// 10.select type = GET.
// 11.Enter the URL = http://localhost:3000/users
// 12.Click Send.

// 13 postman get output is
            // [
            //     { "id": 1, "name": "John Doe", "email": "john.doe@example.com" },
            //     { "id": 2, "name": "Jane Smith", "email": "jane.smith@example.com" },
            //     { "id": 3, "name": "Mark Taylor", "email": "mark.taylor@example.com" }
            //   ]
            

//         The server responds with all the products stored in memory.

  