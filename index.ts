#! /usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor(Math.random()* 6 + 1);
// const randomNumber = Math.random();

const answers = await inquirer.prompt([
    {
    name:"userGuessedNumber",
    type: "number",
    message: "pleas guess a number between 1-10:",
},
]);
if(answers.userGuessedNumber === randomNumber){
    console.log("congratulation! you guess write number.");
}
else{
    console.log("wrong number");
}
