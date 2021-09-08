function getGlobalObject(){
    return this;
}

function fiveTicks(){
    var seconds = 1;
    var timer = setInterval(function(){
        console.log(seconds++);
        if(seconds > 5){
            clearInterval(timer);
        }
    },1000)
}

var global = getGlobalObject();


module.exports = {
    fiveTicks:fiveTicks,
    timeout : function(func,time){
        setTimeout(func , time );
    }
}
module.exports.files_directory = __dirname;
module.exports.files_path = __filename;