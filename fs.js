const fs = require(`fs`);

//asynchronous read - we read a file in this manner when one doesn't want to halt the js code which follows this fs.readFile
fs.readFile("Sample.txt",function(err,data){
    if(err){
        console.log(`error occured, while attempting to read a text file`);
    }else{
        console.log("\n\n\n"+data.toString());
    }
}) 

// synchronous read - we read a file in this manner when one wants the data for the consecutive operations
var data = fs.readFileSync(`Sample.txt`);
console.log("\n\n\n"+data.toString()); // we need to use toString no matter how we read the data. else the data will be displayed like a buffer.


var data = fs.readFileSync("Sample.txt","utf8"); // by specifying the character encoding like this you need not specifically use the tostring Function.

console.log("\n\n\n"+data);

var data = fs.readFile("Sample.txt","utf8",function(err ,data){
    if(err){
        console.log("\n\n\nerror occured file reading the file : " , err);
    }else{
        console.log(`\n\n\n ${data}`);
    }
})

fs.writeFileSync("Sample_clone.txt","This was written by fs module writeFileSync"); // writes on files synchronously

fs.writeFile("Sample_clone.txt",fs.readFileSync("Sample_clone.txt","utf8")+"\nand this was written by fs.writeFile ie. async writeFile",function(err){
    if(err) console.log("an error occured");
}); // write file on files asynchronously

fs.appendFile("Sample_clone.txt","\n appended by fs.appendFile",function(err){
    if(err){
        console.log("error occured while appending a string to the file");
    }
    fs.appendFileSync("Sample_clone.txt"," \nWritten by appendFileSync");
})
// all of the above function make use of the specified file and then automatically close them.
// but if you use a file which takes hold of an fd. like fs.open(filename) which returns a file descripter(fd object) then you need to close it by using fs.closeSync(fd) or fs.close(fd);

// fs.closeSync(); // closes a synchronously

// fs.close(); // closes a file 

