// Q.1) Develop an Express.js application that defines routes for Create operations  
// on a resource (Movie).



// Import express module
const express = require('express');

// Initialize the express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// In-memory storage for movies (as an array)
let movies = [];

// POST route to create a new movie
app.post('/create-movie', (req, res) => {
  const { title, director, releaseYear } = req.body;

  // Simple validation to ensure required fields are provided
  if (!title || !director || !releaseYear) {
    return res.status(400).json({
      success: false,
      message: 'All fields (title, director, releaseYear) are required.'
    });
  }

  // Create a new movie object
  const newMovie = { title, director, releaseYear };

  // Add the new movie to the movies array
  movies.push(newMovie);

  // Respond with a success message and the created movie
  res.status(201).json({
    success: true,
    message: 'Movie created successfully',
    movie: newMovie
  });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



// __________________________________________________________________-
// How to Run:

//  1.Save code =Q1.js
// 2.type terminal = node Q1.js  (server is running)

//  ***(CREATE)***

// 1.***Test with Postman:***

//       Method: POST

//       URL= http://localhost:3000/create-movie
      
//       JSON code= 

//             {
//               "title": "Inception",
//               "director": "Christopher Nolan",
//               "releaseYear": 2010
//             }
//       Output =Response:

            
//             {
//               "success": true,
//               "message": "Movie created successfully",
//               "movie": {
//                 "title": "Inception",
//                 "director": "Christopher Nolan",
//                 "releaseYear": 2010
//               }
//             }


//             This is a simple Create operation for the Movie resource in an Express.js application.