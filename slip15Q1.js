// Q.1) Find an emp with a Salary greater than 25000 in the array. (Using find by id method) 


const { runAllChains } = require('express-validator/lib/utils');
const readline = require('readline');

// Set up the readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array of employees
const employees = [
  { id: 1, name: 'John Doe', salary: 30000 },
  { id: 2, name: 'Jane Smith', salary: 22000 },
  { id: 3, name: 'Mike Johnson', salary: 27000 },
  { id: 4, name: 'Sara Williams', salary: 25000 },
  { id: 5, name: 'Chris Brown', salary: 28000 }
];

// Function to find an employee by ID with a salary greater than 25000
function findEmployeeById(id) {
  return employees.find(employee => employee.id === id && employee.salary > 25000);
}

// Prompt user for employee ID
rl.question('Enter Employee ID to search: ', (id) => {
  // Convert the input to a number
  const employeeId = parseInt(id);

  // Call the function with the user input
  const result = findEmployeeById(employeeId);

  if (result) {
    console.log(`Found employee: ${result.name}, Salary: ${result.salary}`);
  } else {
    console.log('No employee found with this ID and salary greater than 25000.');
  }

  // Close the readline interface after input is processed
  rl.close();
});


// ____________________________
// How to run:

// save code= Q1.js

// terminal= node Q1.js