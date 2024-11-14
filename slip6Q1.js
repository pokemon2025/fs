// Q.1) Develop an Express.js application that defines routes for Create and Read operations 
// on a resource (products).  


// Import the Express module
const express = require('express');
const app = express();

// Use middleware to parse JSON request bodies
app.use(express.json());

// In-memory database (you can replace this with a real database like MongoDB)
let products = [
  { id: 1, name: 'Product 1', price: 100 },
  { id: 2, name: 'Product 2', price: 150 },
];

// Route to create a new product (POST)
app.post('/products', (req, res) => {
  const newProduct = req.body; // Get product data from the request body

  if (!newProduct.name || !newProduct.price) {
    return res.status(400).json({ message: 'Product name and price are required.' });
  }

  // Assign a new ID (for simplicity, use length + 1)
  newProduct.id = products.length + 1;

  // Add the new product to the products array
  products.push(newProduct);

  // Return the newly created product
  res.status(201).json(newProduct); // Created
});

// Route to get all products (GET)
app.get('/products', (req, res) => {
  res.status(200).json(products); // Return all products
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// ___________________________________________

// How to Run:

// 1.Open a terminal type = node Q1.js
// 2.server will start

// ***(CREATE)***

//  **** Test the POST request**** .......  POSt madhe =..........product 3 add kela

// 3.Open Postman
// 4.select type = POST.
// 5.Enter the URL = http://localhost:3000/products
// 6.Go to the "Body" tab  select raw. Then choose JSON
// 7.Add the JSON data 
//         {
//             "name": "Product 3",
//             "price": 200
//         }
// 8.Click Send.

// 9.postman post output is 
//         {
//             "id": 3,
//             "name": "Product 3",
//             "price": 200
//         }
  

// ***(READ)***

// ****Test the GET request****  .......  GET madhe =..........product 3 display kela

// 10.select type = GET.
// 11.Enter the URL = http://localhost:3000/products
// 12.Click Send.

// 13 postman get output is
//         [
//             { "id": 1, "name": "Product 1", "price": 100 },
//             { "id": 2, "name": "Product 2", "price": 150 },
//             { "id": 3, "name": "Product 3", "price": 200 }
//         ]

//         The server responds with all the products stored in memory.

  