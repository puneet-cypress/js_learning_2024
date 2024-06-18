//unique value from the array
let array = [1,2,3,2,1,1,1,1,1,2,2,2,2,2,9,9,9,9,8,8,8,8,8,8];
let uniquearr = [...new Set(array)];
console.log(uniquearr);


//swap the values:

let a = 10;
let b = 20;
[a,b] = [b,a];
console.log(a,b);

