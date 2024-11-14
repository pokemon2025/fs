// Q.1) Implement a simple server using Node.js.                


// Import the built-in http module
const http = require('http');

// Define the hostname and port for the server
const hostname = '127.0.0.1';
const port = 3000;

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Set the response header to indicate it's a plain text response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send a simple response when the server is accessed
  res.end('Hello, world! This is a simple Node.js server.\n');
});

// Start the server and listen on the defined hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// __________________________________________________________

// HoW to run:

// 1.type terminal = node Q2.js
// 2. terminal la mesg yeil = Server running at http://127.0.0.1:3000/

// 3.Open your browser enter link in url =  http://127.0.0.1:3000/