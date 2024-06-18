//reverse a string
//say hello and you have to make it olleh

function reverseString(string){

    let brokenArray = string.split('');
    let reverseddddArray = brokenArray.reverse();
    let reversedString = reverseddddArray.join('');
    return reversedString;

}

console.log(reverseString('START'));

//other way to do it

function reverseString(texttttt){

    let a = texttttt.split('');
    let b = a.reverse();
    let reverse = b.join('');
    return reverse;

}

console.log(reverseString('START'));


