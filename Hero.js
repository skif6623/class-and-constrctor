class Hero {
	constructor(stats) {
		this.name = stats.name;
		this.xp = stats.xp;
		console.log(stats);
	}

	gainXp(amount) {
		console.log(`${this.name} отримує ${amount} досвіду`);
		this.xp += amount;
	}
}

const mango = new Hero({name: "mango", xp: 1000});

mango.lastName = "emi";

console.log(mango);
