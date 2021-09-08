function isPrime(number){
    if(number <= 0){
        return "this module is for only positive integers";
    }
    else if(number == 1){
        return false;
    }
    var sqrt_num = Math.floor(Math.sqrt(number));
    for(var i = 2 ;i  <= sqrt_num; i++){
        if(number % i === 0){
            return false;
        }
    }
    return true;
}

module.exports.isPrime = isPrime;