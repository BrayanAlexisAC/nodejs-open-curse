// Only can use await in body file with Ecma Script Modules
const {readFile} = require('node:fs/promises');

// IIFE - Inmediatly invoked function expression
console.log('/////////////// Sync Method Promises ////////////////////');
(async () => {
  let firstText = await readFile('./test-file1.txt','utf-8');
  
  console.log('first text: ', firstText);
  console.log('Doing things while reading files');
  
  let secondText = await readFile('./test-file2.txt','utf-8');
  
  console.log('second text: ', secondText);
})();
