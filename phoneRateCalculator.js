//Call the readline library
const readline = require('readline-sync');

//Ask the user for the minutes and save it in the variable minutes
let minutes = parseInt(readline.question("How many minutes have you talked? "));

//Declare the variable mustPay where I will save the fee
let mustPay;

if (minutes <= 180){ //If the minutes are less than 180 
    //The fee will be 10
    mustPay = 10;
}else if( (minutes > 180) && (minutes < 240) ){ //If the minutes are between 180 and 240
    //The fee will be 10 plus que minutes that exceed the 180 minutes and multiplied by 0.1
    mustPay = 10 + ((minutes - 180)*0.1);
}else{ //If the minutes are more than 240
    //The fee will be 10 plus minutes from 180 to 240, that are 60 multiplied by 0.1, 
    //plus the minutes that exceed the 240 multiplied by 0.2
    mustPay = 10 + (60*0.1) + ((minutes-240)*0.2);
}

//Display by console the fee to the user
console.log("Must pay "+mustPay+" euros.")