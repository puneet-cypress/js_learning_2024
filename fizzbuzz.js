// एक फ़ंक्शन fizzBuzzCustom लिखिए जो तीन तर्क (arguments) लेता है: n, a, और b:

// n: यह अधिकतम संख्या है (1 से n तक)।
// a और b: ये दो संख्याएँ हैं।


function fizzBuzzCustom (n,a,b) {

    for (let i = 1; i <= n; i++)
        if (i % a == 0 && i % b ==0){
            console.log('fizzBuzz');
        } else if  (i % a === 0) {
            console.log('fizz');
        } else if (i % b ==0) {
            console.log('Buzz');
        }
        else {
            console.log(i);
        }
}

fizzBuzzCustom(8,15,3);


