// Version 1: Returning the result
function mul(a, b) {
    return a * b;
}

console.log(mul(10, 10)); // This will print 50

// Version 2: Logging the result directly in the function
function mulAndLog(a, b) {
    console.log(a * b);
}

//mulAndLog(10, 5); // This will print 50
let val = mulAndLog(10, 5); // This will print 50
