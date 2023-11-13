const fileSystem = require('node:fs/promises');
const path = require('node:path');
const picocolors = require('picocolors');

let folder = process.argv[2] ?? '.';

async function ls(folder){
  await fileSystem.readdir(folder)
  .then(async files => {
    let filesPromises = files.map(async file =>{
      let filePath = path.join(folder,file);
      let stat;
      let directory = "--";
      let size = ""
      let lastModify = ""
      try {
        stat = await fileSystem.stat(filePath);        
        directory = stat.isDirectory() ? picocolors.yellow("-d") : picocolors.blue("-f");
        size = stat.size;
        lastModify = stat.mtime.toLocaleString();
      } catch (error) {
        console.warn(picocolors.yellow("Error processing", file, "error:",error));
      }

      return `${directory} ${picocolors.cyan(file.padEnd(30))} ${picocolors.green(size.toString().padEnd(10))} ${lastModify.padStart(20)}`;
    });
    
    let filesInfo = await Promise.all(filesPromises);
    filesInfo.forEach(file => console.info(file));
    
  }).catch(error => console.error(picocolors.red("Error while reading files: ", error)));

}

ls(folder);
