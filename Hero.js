class Hero {
	constructor(stats) {
		this.name = stats.name;
		this.xp = stats.xp;
	}

	gainXp(amount) {
		console.log(`${this.name} отримує ${amount} досвіду`);
		this.xp += amount;
	}
}

class War extends Hero {
	constructor({name = "Кратос", xp, weapon}) {
		super({name, xp});

		this.weapon = weapon;
	}
}

const mango = new War({xp: 1000, weapon: "Левіафан"});
console.log(mango);
