// Only can use await in body file with Ecma Script Modules
import {readFile} from  'node:fs/promises';

console.log('/////////////// aSync Method Promises ////////////////////');

let firstText = await readFile('./test-file1.txt','utf-8');

console.log('first text: ', firstText);
console.log('Doing things while reading files');

let secondText = await readFile('./test-file2.txt','utf-8');

console.log('second text: ', secondText);