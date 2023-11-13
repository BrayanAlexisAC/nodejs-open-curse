const os = require('node:os');

console.log('Informacion del sistema operativo:');
console.log('---------------------------------')

console.log('Nombre del sistema operativo: ', os.platform());
console.log('Version del sistema operativo: ', os.release());
console.log('Arquitectura: ', os.arch());
console.log('CPUs: ', os.cpus());
console.log('Memoria Libre: ', os.freemem());
console.log('Memoria Total: ', os.totalmem());
console.log('uptime', os.uptime / 60 /60);