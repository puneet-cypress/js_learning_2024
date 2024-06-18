// Write a function calculateGrade that takes a single argument score 
//an integer between 0 and 100) and prints 
//the corresponding grade based on the following criteria:

// A for scores 90 and above
// B for scores 80 to 89
// C for scores 70 to 79
// D for scores 60 to 69
// F for scores below 60

function calculateGrade(score) {

    if (score >= 90)
    {
        console.log('Grade:' +  'A');
    } else if
        (score >=80) {
            console.log('Grade:' + 'B');
        }

        else if 
        (score >= 70) {
            console.log('Grade:' + 'C');
        } 
        else if 
        (score >=60){
            console.log('Grade:' + 'D');

        }
        else if
        (score <= 60) {
            console.log('Grade:' + 'F');
        }

}

calculateGrade(101);