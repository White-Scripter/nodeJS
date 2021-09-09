const prime = require('./isPrime');
const globalObjectProperties = require(`./GlobalObject`);
const { timeout } = require('./GlobalObject');
const {eventEmitter} = require("./Events")
const {Avenger} = require("./Events");
console.log(prime.isPrime(36));
console.log(globalObjectProperties.files_directory,globalObjectProperties.files_path);
globalObjectProperties.fiveTicks()
timeout(function(){console.log("executes after the specified amount of time")},6000);

eventEmitter.emit("MyEvent","Hello")
eventEmitter.emit("MyEvent2","World");

let cap = new Avenger("Captain America","I can do this all day");
cap.emit("Action");