// Q.2) Find a company with a workforce greater than 30 in the array (use find by 
//     id method)  


// Import readline module to get user input
const readline = require('readline');
const { runInContext } = require('vm');

// Array of companies
const companies = [
  { id: 1, name: 'Tech Corp', workforce: 25 },
  { id: 2, name: 'Innovative Solutions', workforce: 50 },
  { id: 3, name: 'Global Enterprises', workforce: 55 },
  { id: 4, name: 'Alpha Industries', workforce: 55 },
  { id: 5, name: 'Creative Minds', workforce: 28 }
];

// Function to find a company by ID with workforce greater than 30
function findCompanyById(id) {
  return companies.find(company => company.id === id && company.workforce > 30);
}

// Setup readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to enter a company ID
rl.question('Enter company ID to search for a workforce greater than 30: ', (input) => {
  // Convert input to a number
  const companyId = parseInt(input);

  // Find company by the user-input ID
  const result = findCompanyById(companyId);

  if (result) {
    console.log(`Found company: ${result.name}, Workforce: ${result.workforce}`);
  } else {
    console.log('No company found with this ID and workforce greater than 30.');
  }

  // Close the readline interface
  rl.close();
});

// _________________________________________________________________________

// How to run:

//save file filename.js and run terminal = node Q2.js


// output

// Enter company ID to search for a workforce greater than 30: 1
// No company found with this ID and workforce greater than 30.
// PS C:\Users\Hitesh patil\OneDrive\Desktop\FS\Slip3> node Q2.js
// Enter company ID to search for a workforce greater than 30: 2
// Found company: Innovative Solutions, Workforce: 50
// PS C:\Users\Hitesh patil\OneDrive\Desktop\FS\Slip3> node Q2.js
// Enter company ID to search for a workforce greater than 30: 3
// Found company: Global Enterprises, Workforce: 55
// PS C:\Users\Hitesh patil\OneDrive\Desktop\FS\Slip3> node Q2.js
// Enter company ID to search for a workforce greater than 30: 4
// Found company: Alpha Industries, Workforce: 55