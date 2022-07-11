var readlineSync = require('readline-sync');
const chalk = require('chalk');

console.log(chalk.underline.italic.hex('#ff3b9a')("WELCOME TO THE QUIZ BASED ON INVENTIONS"));
console.log("\n");

var questions = [
  {
    question: "Who invent Ballpoint Pen? ",
    optionOne: "Biro Brothers",
    optionTwo: "Waterman Brothers",
    optionThree: "Bicc Brothers",
    optionFour: "Write Brothers",
    answer: "Biro Brothers"
  },
  {
    question: "In which decade was the first solid state integrated circuit demonstrated? ",
    optionOne: "1950s",
    optionTwo: "1960s",
    optionThree: "1970s",
    optionFour: "1980s",
    answer: "1950s"
  },
  {
    question: "What J. B. Dunlop invented? ",
    optionOne: "Pneumatic rubber tire",
    optionTwo: "Automobile wheel rim",
    optionThree: "Rubber boot",
    optionFour: "Model airplanes",
    answer: "Pneumatic rubber tire"
  },
  {
    question: "Which scientist discovered the radioactive element radium? ",
    optionOne: "Isaac Newton",
    optionTwo: "Albert Einstein",
    optionThree: "Benjamin Franklin",
    optionFour: "Marie Curie",
    answer: "Marie Curie"
  },
  {
    question: "What Galileo invented? ",
    optionOne: "Barometer",
    optionTwo: "Pendulum clock",
    optionThree: "Microscope",
    optionFour: "Thermometer",
    answer: "Thermometer"
  },
  {
    question: "What James Watt invented? ",
    optionOne: "Diving bell",
    optionTwo: "Steam boat",
    optionThree: "Hot air balloon",
    optionFour: "Rotary steam engine",
    answer: "Rotary steam engine"
  },
  {
    question: "	Who invented Jet Engine? ",
    optionOne: "Sir Frank Whittle",
    optionTwo: "Gottlieb Daimler",
    optionThree: "Roger Bacon",
    optionFour: "Lewis E. Waterman",
    answer: "Sir Frank Whittle"
  },
  {
    question: "Who invented Gunpowder? ",
    optionOne: "G. Ferdinand Von Zeppelin",
    optionTwo: "Sir Frank Whittle",
    optionThree: "Roger Bacon",
    optionFour: "Leo H Baekeland",
    answer: "Roger Bacon"
  }
  
]


var score = 0;

function play(question, optionOne, optionTwo, optionThree, optionFour, answer){

  console.log(chalk.hex('#3bf5ff')("Question: " + question));
  console.log(chalk.hex('#ffa166')("Option 1: " +optionOne));
  console.log(chalk.hex('#ffa166')("Option 2: " +optionTwo));
  console.log(chalk.hex('#ffa166')("Option 2: " +optionThree));
  console.log(chalk.hex('#ffa166')("Option 3: " +optionFour + "\n"));
  
  var userAnswer = readlineSync.question("Write the Answer: " );

  if(userAnswer === answer){
    console.log(chalk.hex('#66ff69')("You are right"))
      ;
    score = score+1;
  }
  else{
    console.log(chalk.red("You are wrong" + "\n"));
    score = score -1;
    console.log(chalk.hex('#66b8ff')("Correct Answer is: " + answer + "\n"));
  }
  console.log(chalk.hex('#66ff69')("Your Score is : " + score + "\n"));

  
}



for(var i =0; i<questions.length; i++){
  var currentQuestions = questions[i];
  play(currentQuestions.question, currentQuestions.optionOne, currentQuestions.optionTwo, currentQuestions.optionThree, currentQuestions.optionFour, currentQuestions.answer)
 
}


if(score > 5){
  console.log("Congratulations! you are in the next level");
}