// Only can use await in body file with Ecma Script Modules
const fileSystem = require('node:fs/promises');

Promise.all([
  fileSystem.readFile('./test-file1.txt', 'utf-8'),
  fileSystem.readFile('./test-file2.txt', 'utf-8')
]).then(([firstText, secondtext]) => {
  console.log(firstText);
  console.log(secondtext);
})