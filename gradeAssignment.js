//Ask the user to enter their score
let grade = prompt("Enter your score: ");
console.log("Enter your score: " + grade);

//Check if the user grade is fail, fair, good, or excellent
if(grade <= 70){
    console.log("Your grade Needs Improvement");
} else if (grade >=71 && grade <= 79){
    console.log("Your grade is Fair");
} else if (grade >=80 && grade <= 89){
    console.log("Your grade is Good");
}else{
    console.log("Your grade is Excellent");
}