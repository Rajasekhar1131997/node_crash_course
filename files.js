// fs is a core module in Node.js that allows us to work with the file system.
// We can use it to read and write files, create and delete files and directories, and more.
// In this snippet, we require the fs module and use it to read a file, write to a file, create a directory, and delete a file.
// We also check if a file or directory exists before performing an operation on it.
const fs = require('fs');

// reading files
// readfile is an asynchronous function is used to read the content of a file.
fs.readFile('./docs/blog1.txt', (error, data) => {
    if (error) {
        console.log(error);
    }
    console.log(data.toString());
});

console.log('last line');

// writing files
// writefile is an asynchronous function is used to write content to a file.
fs.writeFile('./docs/blog1.txt', 'Hello, world', () => {
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'Hello, world', () => {
    console.log('file was written');
});

// directories
// checking if a directory exists and existsSync is a synchronous function that checks if a file or directory exists. if exists it will remove the directory.
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('folder created');
    });
} else {
    fs.rmdir('./assets', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('folder deleted');
    });
}

// deleting files
// unlink is an asynchronous function that deletes a file. it first checks if the file exists before deleting it.
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (error) => {
        if (error) {
            console.log(error);
        }
        console.log('file deleted');
    });
}