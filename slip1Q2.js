// Q.2) Create a Node.js application that reads data from multiple files asynchronously 
// using promises and async/await. 



const fs = require('fs').promises;

// Function to read multiple files asynchronously
async function readFiles(filePaths) {
    try {
        const readPromises = filePaths.map(path => fs.readFile(path, 'utf-8'));
        const fileContents = await Promise.all(readPromises);
        
        console.log("Contents of the files:");
        fileContents.forEach((content, index) => {
            console.log(`File ${index + 1} content:\n${content}`);
        });
    } catch (error) {
        console.error("Error reading files:", error);
    }
}

// Define file paths
const files = ['./file1.txt', './file2.txt'];

// Run the readFiles function
readFiles(files);

// _____________________________________________

// How to run:

// // 1.save this code Q2.js 
// 2. create 2 new file in same location
// 3. file1.txt    file2.txt
// // 4.run code = node Q2.js
// 5.output =
//         Contents of the files:
//         File 1 content:
//         Hello from File 1
//         File 2 content:
//         Hello from File 2
        