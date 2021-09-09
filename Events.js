const events = require("events");
const eventEmitter = new events.EventEmitter();


eventEmitter.addListener("MyEvent",function(msg="no message specified",msg2="no message specified"){
    console.log(`message = ${msg} , message 2 = ${msg2}`);
});
eventEmitter.on("MyEvent2",function(msg){
    console.log(`My Event 2 was triggered with a message = ${msg}`);
});

module.exports.eventEmitter = eventEmitter;

class Avenger extends events.EventEmitter{
    constructor(name="didnot specify" , dialog = "did not specify"){
        super();
        this.name=name;
        this.dialog=dialog;
        this.on("Action",function(msg){
            console.log(`${name} : ${this.dialog}`);
        });
    }
}

module.exports.Avenger = Avenger;