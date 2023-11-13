const { readFile } = require('node:fs');
const fileSystem = require('node:fs/promises');

// in case version don't contains native promises in fs
const { promisify } = require('node:util');
const rF = promisify(fileSystem.readFile);

console.log('/////////////// aSync Method Promises ////////////////////');

fileSystem.readFile('./test-file1.txt','utf-8')
  .then(text => console.log(text));

console.log('Doing things while reading files');

fileSystem.readFile('./test-file2.txt','utf-8')
  .then(text => {
    console.log(text);
  });

rF('./test-file1.txt','utf-8').then(text => console.log(text));