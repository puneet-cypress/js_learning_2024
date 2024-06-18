//find the largest num in the arra¥

let num1 =[1,2,3];
let largest = Math.max(...num1); //Summary:
console.log(largest);

//The spread operator ... is needed to convert the array into individual numbers so that
// Math.max can find the largest one.
//Math.max(...num1):
//Now Math.max sees it as Math.max(1, 2, 3) and works correctly, giving you the largest number.

//write a function that takes an array of numbers and returns the smallest number
function smallestNum(count){
    let smallest = Math.min(...count);
    return smallest;
}

let num2 = [0,2,3,4,5];
console.log(smallestNum(num2));