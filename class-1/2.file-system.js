const fileSystem = require('node:fs');

const stats = fileSystem.statSync('./test-file1.txt');
console.log('------------ File Stats ---------------------')
console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbolico
  stats.size // tamaño en bytes 
)

console.log('/////////////// Sync Method ////////////////////');
console.log('----------- reading first file -----------------');

const textFile1 = fileSystem.readFileSync('./test-file1.txt','utf-8');
console.log(textFile1);

console.log('----------- reading second file -----------------');

const textFile2 = fileSystem.readFileSync('./test-file2.txt','utf-8');
console.log(textFile2);

console.log('/////////////// aSync Method ////////////////////');

fileSystem.readFile('./test-file1.txt','utf-8', (err, text) => {
  console.log(text);
}); 

console.log('Doing things while reading files');

fileSystem.readFile('./test-file2.txt','utf-8', (err,text) => {
    console.log(textFile2);
});