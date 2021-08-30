

// Exercise 1
 let rand = 25;
 let userInput = window.prompt("Guess a number between 1 and 100?");
 if (userInput < rand) {
     console.log("Too low");
 }
 else if (userInput > rand) {
     console.log("Too high");
 }
 else{
     console.log("Congrats! You guessed the right number!");
 }

//Exercise 2
var favoritePlayers
let userInput2 = window.prompt("Who are your favorite basketball players?")
switch (favoritePlayers) 
{
    case "firstPlayer":console.log("Kyrie Irving");
        
        break;
    case   "secondPlayer":console.log("Allen Iverson");

        break;
    case "thrirdPlayer":console.log("Lebron James");

        break;
    case "fourthPlayer": console.log("Kevin Durant");

        break;
    case "fifthPlayer":console.log("Kobe Byrant");
    default:
        console.log("This is my top 5");
        break;
}