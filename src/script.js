import 'babel-polyfill';
import node_fetch from './main';



// Destructuring
makeSound({
	species: "animal",	
	sound: 'woof'
})

//var { species, sound } = animal;


function makeSound({ species, sound}){
 console.log('The ' + species + ' says ' + sound + '!');	
}

const dragonEvents = [
 {type: 'attack', value: 12, target: 'player-dorkman'},
 {type: 'yawn', value: 40},
 {type: 'eat',  target: 'horse'},
 {type: 'attack', value: 23, target: 'fluffykins'},
 {type: 'attack', value: 12, target: 'player-dorkman'}
]

// Arrow functions- One Parameter, exclude braces and function with return 
const totalDamageOnDorkman = dragonEvents
	.filter((event) =>  event.type === 'attack')
	.filter((event) =>  event.target === 'player-dorkman')
	.map((event) 	=>  event.value)
	.reduce((prev, value) => (prev || 0) + value)

console.log('totalDamageOnDorkman\n', totalDamageOnDorkman);

// Generator functions and Promises
 
 node_fetch("http://jsonplaceholder.typicode.com/posts/1")
.then( response => response.json() )
.then( post => post.title )
.then( x => console.log('Title: ', x))