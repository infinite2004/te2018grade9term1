const READLINE = reqiure("readline-sync")
let dog = {
	name; "Old Yeller",
	numlegs:4,
	color:"yeller"
	breed:"Golden Retriever",
	bark: function(){
		console.log("bark");
	},

sayName: function(){
	console.log(`My name is ${this.name}!`)

	},
	eat: function(food) {
		if(food === "chicken"){
			console.log("tasty");
		}
		else{
			console.log(`Pass! ${this.name} doesn't eat ${food}s!)

		}

	}

}


dog.sayName();
dog.eat("carrot");