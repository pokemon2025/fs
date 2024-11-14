// Q.2) Create Express.js application to include middleware for parsing request bodies (e.g., 
//     JSON, form data) and validating input data. Send appropriate JSON responses for 
//     success and error cases.  


// Import the required modules
const express = require('express');
const { body, validationResult } = require('express-validator');

// Initialize the express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// POST route for creating a user with validation
app.post('/create-user', [
  // Validate the 'email' field to ensure it's a valid email
  body('email').isEmail().withMessage('Please provide a valid email address'),
  
  // Validate the 'age' field to ensure it's an integer and >= 18
  body('age').isInt({ min: 18 }).withMessage('Age must be at least 18')
], (req, res) => {
  // Extract validation errors from the request
  const errors = validationResult(req);
  
  // If validation errors exist, return them with a 400 error code
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors: errors.array() // Display all validation errors
    });
  }

  // If no errors, return a success message
  res.status(200).json({
    success: true,
    message: 'User created successfully',
    data: req.body // Send the valid data back
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// __________________________________________________________________-
// Hoe to Run:

// 1.Save code =Q2.js
// 2.server run terminal = node Q2.js


// ****Testing with Postman****

// open Postman
// 1. **Valid Request (Email and Age Valid)

//         Method: POST

//         URL= http://localhost:3000/create-user

//         JSON code=

 
//                     {
//                     "email": "valid.email@example.com",
//                     "age": 25
//                     }


//         ** Output = 1. cha= Success output


//                 {
//                 "success": true,
//                 "message": "User created successfully",
//                 "data": {
//                     "email": "valid.email@example.com",
//                     "age": 25
//                 }
//                 }

// 2.**Invalid Request (Invalid Age: < 18)

                       
//         Method: POST

//         URL= http://localhost:3000/create-user

//         JSON code=

                        
//                         {
//                         "email": "valid.email@example.com",
//                         "age": 16
//                         }


//         ** Output = 2. cha= Error output

                    
//                     {
//                     "success": false,
//                     "message": "Validation failed",
//                     "errors": [
//                         {
//                         "msg": "Age must be at least 18",
//                         "param": "age",
//                         "location": "body"
//                         }
//                     ]
//                     }


// 3.**Invalid Request (Invalid Email Format)

//             Method: POST

//             URL= http://localhost:3000/create-user

//            JSON code=

//                     {
//                     "email": "invalid-email",
//                     "age": 25
//                     }

//             ** Output = 3. cha= Error output


//                     {
//                     "success": false,
//                     "message": "Validation failed",
//                     "errors": [
//                         {
//                         "msg": "Please provide a valid email address",
//                         "param": "email",
//                         "location": "body"
//                         }
//                     ]
//                     }