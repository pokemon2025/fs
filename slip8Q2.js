// Q.2) Develop an Express.js application that defines routes for Create, Update operations 
// on a resource (Employee).  


// Import the Express module
const express = require('express');
const app = express();

// Use middleware to parse JSON request bodies
app.use(express.json());

// In-memory database to store employee data (you can replace this with a real database later)
let employees = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Development' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product' }
];

// Route to create a new employee (POST)
app.post('/employees', (req, res) => {
  const newEmployee = req.body;

  // Validate the data (ensure name, position, and department are provided)
  if (!newEmployee.name || !newEmployee.position || !newEmployee.department) {
    return res.status(400).json({ message: 'Name, position, and department are required.' });
  }

  // Assign a new ID for the new employee (using the next available ID)
  newEmployee.id = employees.length + 1;

  // Add the new employee to the in-memory employees array
  employees.push(newEmployee);

  // Send the created employee data as the response
  res.status(201).json(newEmployee);  // HTTP status 201 (Created)
});

// Route to update an existing employee (PUT)
app.put('/employees/:id', (req, res) => {
  const employeeId = parseInt(req.params.id);
  const updatedData = req.body;

  // Find the employee by ID
  const employee = employees.find(emp => emp.id === employeeId);

  // If employee not found, return a 404 error
  if (!employee) {
    return res.status(404).json({ message: 'Employee not found.' });
  }

  // Update the employee's data
  employee.name = updatedData.name || employee.name;
  employee.position = updatedData.position || employee.position;
  employee.department = updatedData.department || employee.department;

  // Return the updated employee data
  res.status(200).json(employee);  // HTTP status 200 (OK)
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// ___________________________________________

// How to Run:

// 1.Open a terminal type = node Q2.js
// 2.server will start

// ***(CREATE)***

//  **** Test the POST request**** .......  POSt madhe =..........employees 3 add kela

// 3.Open Postman
// 4.select type = POST.
// 5.Enter the URL = http://localhost:3000/employees
// 6.Go to the "Body" tab  select raw. Then choose JSON
// 7.Add the JSON data 
              // {
              //   "name": "Alice Johnson",
              //   "position": "UX Designer",
              //   "department": "Design"
              // }

  
// 8.Click Send.

// 9.postman post output is 
            // {
            //   "id": 3,
            //   "name": "Alice Johnson",
            //   "position": "UX Designer",
            //   "department": "Design"
            // }

        
  
// ***(Update)***

// ****Test the PUT request****  .......  PUT madhe =..........employees 1 cha id chnage kela  Update kela

// 10.select type = PUT.
// 11.Enter the URL = http://localhost:3000/employees/1
// 12. Add the JSON data
              // {
              //   "name": "Johnathan Doe",
              //   "position": "Senior Software Engineer",
              //   "department": "Development"
              // }
//13.Click Send.
            
// 14..postman output update id 1 name change=
                // {
                //   "id": 1,
                //   "name": "Johnathan Doe",
                //   "position": "Senior Software Engineer",
                //   "department": "Development"
                // }

                // The server responds with the updated employee and a 200 OK status.

  