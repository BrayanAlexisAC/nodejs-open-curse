//get arguments
console.log(process.argv);

// control events process
process.on('exit',(event)=>{
  console.log('event',event);
});

// controlexit process
//process.exit(0) //all good
//process.exit(1) //some error during process

// current working directory
console.log(process.cwd());

// platform env
console.log(process.env.JAVA_HOME);