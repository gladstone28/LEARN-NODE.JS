[Link to lesson](https://www.codecademy.com/paths/create-a-back-end-app-with-javascript/tracks/bapi-learn-express/modules/introduction-to-node-js/lessons/node/exercises/node-stream-output)

### Learn Node.js

**Writable Streams**

In the previous exercise, we were reading data from a stream, but we can also write to streams! We can create a writeable stream to a file using the fs.createWriteStream() method:
```
const fs = require('fs')

const fileStream = fs.createWriteStream('output.txt');

fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();
```
In the code above, we set the output file as output.txt. Then we .write() lines to the file. Unlike a readable stream, which ends when it has no more data to read, a writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method.

Let’s combine our knowledge of readable and writable streams to create a program which reads from one text file and then writes to another.

### Instructions

Checkpoint 1 Passed
1. We’re going to create a writeable stream. We want to write to a file named shoppingResults.txt. Create a variable fileStream and assign as its value the writable stream.
Hint
The fs core module has already been required in so we have access to the fs.createWriteStream() method:
```
const fileStream = fs.createWriteStream('shoppingResults.txt');
```
Checkpoint 2 Passed

2. Great work. Let’s create a listener callback function to use in the next step. Name this function transformData. transformData should expect to receive some data (we named our parameter line) and it should write() to the writable stream (fileStream) in the format They were out of: [line]\n, where [line] is the argument passed into the function.
Hint
Here’s how our transformData() function looks:
```
let transformData = (line) => {
 fileStream.write(`They were out of: ${line}\n`); 
}
```
Checkpoint 3 Passed
3. We’re nearly there! Let’s assign our transformData function to execute whenever a 'line' event is emitted on the myInterface stream.

We’ll want to use myInterface‘s on() method:
```
myInterface.on('line', transformData);
```
Checkpoint 4 Passed
4. Sweet! Let’s run the program in the terminal. Type node app.js in the terminal and press enter. If everything worked, you should be able to open the shoppingResults.txt file and see that it has the correct contents.
