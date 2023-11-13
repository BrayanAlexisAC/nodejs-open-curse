const path = require('node:path');

// get SO separator
console.log(path.sep);

let filePath = path.join('content','subfolder','sub-subfolder','almost','secret.txt');
console.log(filePath);
console.log(path.basename(filePath));
console.log(path.basename(filePath,'.txt'));
console.log(path.extname(filePath));