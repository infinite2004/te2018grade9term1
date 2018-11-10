const READLINE = require("readline-sync");
// use whatever properties you want for the player object
let player = {
  name: undefined,
  courage: 200,
  intellect: 10000000000000,
  strength: 0,
  charm: 99999999999999,
  weapon: undefined,
  item: "flashlight",
  
};

console.log();
console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
player.name = READLINE.question("What is your name?");
player.weapon = READLINE.question("What is your weapon?: ") 
console.log(`${player.name} stands in front of a spooky haunted house.`);
console.log(`${player.name} hears what sounds like screaming coming from inside the house.`);
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);

  // continconst READLINE = require("readline-sync");
console.log(`${player.name} is confrinted with another door ... Will you open the door`)
let door  = READLINE.question("do you want to open the door? yes or no") 
if(door == "yes"){

   console.log("you found a sword")
   let sword = READLINE.question (" Do you want to pick up the sword")

 if(sword == "yes"){


console.log("you pick up the sword")
  player.weapon

console.log("you decide to go into the house")

console.log("you look at the floor and you see a map")

console.log(" the map is dirty but you make out most of it ")

} 
 }
}


 else {
console.log(`${player.name} choose a location in the map you decide to go to the cellar`);
let cellar = READLINE.question("will you go into the cellar? (yes or no)");
if(cellar == "yes"){
 
console.log("you enter the cellar")


console.log("you find a large cage")

console.log("the cage is broken")

console.log("you hear something")

console.log("you decide to use your sword")
let sword = READLINE.question("you take out your sword")

if(sword == "yes")

console.log("you are then confronted by medusa")

let fight = READLINE.question (" Will you fight medusa")
if (fight = "yes"){
  console.log("then take out sword")
}

console.log("you swing your sword and you cut off her head....")

console.log("you move on you are now confronted by another door")

console.log("Thanks for playing!");
 

  }

  }




















