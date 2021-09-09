const fs = require(`fs`);

// asynchronous read - we read a file in this manner when one doesn't want to halt the js code which follows this fs.readFile
fs.readFile("Sample.txt",function(err,data){
    if(err){
        console.log(`error occured, while attempting to read a text file`);
    }else{
        console.log(data.toString());
    }
}) 

// synchronous read - we read a file in this manner when one wants the data for the consecutive operations
var data = fs.readFileSync(`Sample.txt`);
console.log(data.toString()); // we need to use toString no matter how we read the data. else the data will be displayed like a buffer.