const fs = require('fs');

// readStream is a readable stream that reads data from a file. When there is a huge amount of data instead of waiting for the entire data to be read, we can read it in chunks.
// WriteStream is a writable stream that writes data to a file. when there is a huge amount of data instead of waiting for the entire data to be written, we can write it in chunks to a file.
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding:'utf-8'});
const WriteStream = fs.createWriteStream('./docs/blog4.txt');

readStream.on('data', (chunk) => {
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    WriteStream.write('\nNEW CHUNK\n');
    WriteStream.write(chunk);
});

// piping
// Instead of using readStream and writeStream separately, we can use pipe to read data from a file and write it to another file easily by using below code.
readStream.pipe(WriteStream);