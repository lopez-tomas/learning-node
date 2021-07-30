const	deadpool = {
	name: 'Wade',
	lastName: 'Wilson',
	ability: 'Regeneration',
	age: 50,
	getName() {
		return `${ this.ability } ${ this.lastName }`;
	}
}

//const name = deadpool.name;
//const lastName = deadpool.lastName;
//const ability = deadpool.ability;

function printHero( hero ) {
	const { name, lastName, ability, age } = hero;
	console.log(name, lastName, ability, age);
}

//function printHero( name, lastName, ability, age ) { /// Another way to do it
	// name = 'Tomas';
	//console.log(name, lastName, ability, age);
//}

// printHero( deadpool );

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const h1 = heroes[0]
//const h2 = heroes[1]
//const h3 = heroes[2]
const [ , , h3 ] = heroes; // I'm only interested in Batman, so I don't put name to the others, but I have use comma to especify which one I want.

console.log( h3 ); 
