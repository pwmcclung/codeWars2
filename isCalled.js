var once = function(fn) {
    let returnVal;
    let isCalled = false;
    return function(...args){
        if ( !isCalled ){
            returnVal = fn(...args);
            isCalled = true;
            return returnVal;
        }
    }
};