const prime = require('./isPrime');
const globalObjectProperties = require(`./GlobalObject`);
const { timeout } = require('./GlobalObject');

console.log(prime.isPrime(36));
console.log(globalObjectProperties.files_directory,globalObjectProperties.files_path);
globalObjectProperties.fiveTicks()
timeout(function(){console.log("executes after the specified amount of time")},6000);