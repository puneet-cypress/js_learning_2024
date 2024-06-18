// is the string is  allindrome or not


function ispalindrom (text){
    let lowertext = text.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reversetext = lowertext.split('').reverse().join('');
    return reversetext === lowertext;
}

console.log(ispalindrom("RAD    AR")); // true

   

  /*replace(/[^a-zA-Z0-9]/g, '') will basicall 
  remove an extra spaces and special characters from the string
regex to lower casesplit to reverse to join/*



//how will you build aframework.
//how to set env
//
    









    


