const READLINE = require("readline-sync");

console.log(`*******************************************

	WELCOME TO THE PARENT BOT

********************************************`);

let hw = READLINE.question("Did you do your homework? yes/no: ");


if(hw == "yes") {
	console.log("Great!");
}
else {
	let talkback = READLINE.question("You've got to do well in school if you want to get ahead in life. Go do your hw! ");
	if(talkback == "whatever" || talkback == "I don't care") {
		console.log("No video games for the rest of the week and i'll take your phone away. Go finish that homework.");
		console.log(" hurry up or else")

	}

}

let bath = READLINE.question("Did you take a shower? ");
if(bath == "no") {
	console.log("Go.");
	console.log("go or else no more video games for the rest of the day");
}
else {
	console.log("Good.");
}

else {
	cosole.log("bad")
}

let food = READLINE.question("Did you eat when you got home? ");
if(food == "yes") {
	console.log("Good");
}
else {
	console.log("Eating well is really important to your health. Go have a healthy snack at least.");
	console.log("remember if you don't eat i'll take your phone");
}
 else {
 	console.log("if you don't eat you i'll make you quit you sports teams");
 	console.log("or you van eat them and you can stay your choice");
 }
console.log(`
**************************************************

`);
console.log("Thanks for using The Parent Bot. Good bye for now!");
console.log(`
**************************************************

`);