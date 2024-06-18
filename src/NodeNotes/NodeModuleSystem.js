// // NODE MODULE SYSTEM

/// Global Objects
// You cannot add variable to the global object. They are only scooped on the local file.

/// Modules
// If you want to use that variable/function that's defined in a module outside that same module, you
// need to explicity export it and make it public.
// console.log(module)
//The code snippet below will return whatever is exported from the logger file.

/// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {
//   // Your module code goes here
// });

// The Node.js module wrapper function is a crucial concept for understanding how modules are loaded and executed in Node.js applications. It's a function that Node.js automatically prepends around your entire module code before running it. Despite its automatic nature, understanding its structure and purpose can be beneficial.

// Explanation of Arguments:
// - exports: This is an object that acts as the public interface of your module. You can assign values to exports to make them accessible from other modules using require.
function log(message) {
  // send an HTTP Request.
  console.log(message);
}
// if you want to write a function to exports, you would write
module.exports.log = log; // or
exports.log = log; // you cannot overwrite/reset this exports variable since exports is module.exports.

// - require: This is a function used to import and access functionalities from other modules. This function is local to each module.
const logger = require("./logger.js");
// - module: This is a reference to the current module object itself. It provides some properties like exports (mentioned above) and rarely used properties like id (unique identifier).
module.exports = log;

// - __filename: This is a string containing the absolute path to the current module file.
console.log(__filename); // returns(Desktop/AdvancedJS/src/NodeNotes/node.js)
console.log(__dirname); // returns(/Users/luis/Desktop/AdvancedJS/src/NodeNotes)
// - __dirname: This is a string containing the absolute path to the directory where the current module file resides.

// Functionality:
// Scoping: The wrapper function creates a closure around your module code. This ensures that variables declared within the module are not accessible from outside the module, promoting modularity and preventing naming conflicts.
// exports Object: By assigning properties to the exports object, you define what functionalities or values you want to expose from your module for other modules to use.
// require Function: This function allows your module to import functionalities from other modules. Modules can depend on each other, forming a network of interconnected components.
// __filename and __dirname: These internal variables provide information about the current module's location, which can be useful in some scenarios.

// Benefits:
// Modularization: The module wrapper promotes code organization and reusability by creating well-defined modules with clear boundaries.
// Variable Scoping: It prevents naming conflicts by keeping variables within the module's scope, improving maintainability.
// Dependency Management: The require function facilitates the use of functionalities from other modules, enabling complex applications to be built from smaller components.

/// Path Module

// --- Useful Node Modules
// By understanding these core modules, you'll be well-equipped to perform various tasks in your Node.js applications, from working with the file system and making HTTP requests to manipulating paths and handling data

// -- File System (fs):
// Provides functionalities for interacting with the file system on your server.
// Common tasks include:
// - Reading and writing files
// - Creating, renaming, and deleting files and directories
// - Checking file and directory existence
// - Getting file stats (size, permissions, etc.)

const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// -- HTTP
// Offers tools for building both HTTP servers and clients.
// Server-side:
// Create servers to handle incoming HTTP requests and send responses.
// Define routes to handle different URLs.
// Client-side:
// Make HTTP requests to other servers (e.g., APIs) to fetch data.

const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.write("Hello World!");
  res.end();
});

server.listen(3000, () => {
  console.log("Server listening on port 3000");
});

// -- OS
// Provides access to platform-specific operating system functionalities.
// Common tasks include:
// Getting system information (hostname, uptime, etc.)
// Creating child processes
// Interacting with the environment(e.g., setting environment variables)

const os = require("os");

console.log(`Hostname: ${os.hostname()}`);
console.log(`Platform: ${os.platform()}`);

// -- Path
// Offers utilities for manipulating file and directory paths.
// Common tasks include:
// Joining path segments
// Resolving relative paths to absolute paths
// Getting file extensions and directory names
// Working with platform-specific path separators

const path = require("path");

const filePath = path.join(__dirname, "data", "file.txt");
const absolutePath = path.resolve("./data/file.txt");
const ext = path.extname(filePath);

// -- Process
// Provides information about the current Node.js process and allows some control over it.
// Common tasks include:
// Accessing environment variables
// Exiting the process
// Getting process ID (PID)
// Working with command-line arguments

const process = require("process");

console.log(`PID: ${process.pid}`);
console.log(`Command Line Arguments: ${process.argv.slice(2)}`);

// -- Query Strings
// Not a built-in module: Requires the querystring module to be installed (npm install querystring).
// Provides tools for parsing and working with query strings (the data appended to a URL after the ?).
// Common tasks include:
// Parsing a query string into an object
// Stringifying an object into a query string

const querystring = require("querystring");

const queryStringData = "name=John&age=30";
const parsedObj = querystring.parse(queryStringData);

console.log(parsedObj); // { name: 'John', age: '30' }

// -- Stream

// Represents a continuous flow of data.
// Used for handling large amounts of data efficiently without loading it all into memory at once.
// Common tasks include:
// Reading data from files, network connections, or other sources in chunks
// Writing data to files, network connections, or other destinations in chunks
// Creating pipelines of operations to transform data streams

const fs = require("fs");
const stream = fs.createReadStream("largeFile.txt");

stream.on("data", (chunk) => {
  console.log(chunk.toString());
});

stream.on("end", () => {
  console.log("Finished reading file");
});

/// Path Module
// https://nodejs.org/docs/latest/api/path.html




///  OS Module 
///  File System Module 
///  Events Module 
///  Event Arguments  
///  Extending EventEmitter  
///  HTTP Module 