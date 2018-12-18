const READLINE = require("readline-sync");
/**** Problem 1 ****
Write a function that prints values from 10 to 0, counting down. Use a while
loop!
*/
function countdown() {
let i =10
while(i>=0){
console.log(i)
i--;
}
  }
// Test below
countdown();

/**** Problem 2 ****
Write a function that asks the user to enter a secret password. Until the user
enters the correct password, the program will keep asking for all eternity!
When they finally do enter the correct password, exit the loop and print a
congratulatory message.
*/
function getPassword() {
let password = READLINE.question("type in the password");
console.log("HINT THE PASSWORD IS BASED ON A EVENT THAT HAPPENS IN SPACE");
while(password != "supernova"){
	console.log("wrong password");
	password = READLINE.question("type in the password");

}
console.log("congradulations")



}

// Test below
getPassword();

/**** Problem 3 ****
Enhance your function above to only allow the user to try entering the correct
password three times. If they fail three times, the program should kick them
out and tell them they are a robot. Otherwise it should give them the same
congratulatory message above.
*/
function getPasswordEnhanced() {
l
let password = READLINE.question("type in the password");
console.log("HINT THE PASSWORD IS BASED ON A EVENT THAT HAPPENS IN SPACE");
kills = 0
while(password != "supernova"&& kill < 3){
	kills ++
	if(kills = 1){}
	console.log("wrong password");
	password = READLINE.question("type in the password");

kills ++
	if(kills = 2){}
	console.log("wrong password");
	password = READLINE.question("type in the password");

kills ++
	if(kills = 3){}
	console.log("you a roblot");


}
console.log("congradulations")
}



// Test below
getPasswordEnhanced();

/**** Problem 4 ****
As a final enhancement, make it so when the user enters the wrong password, the
program tells them that they are wrong, along with how many attempts they
have left.
*/
function getPasswordFinal() {

}

// Test below
//getPasswordFinal() ;