#!/usr/bin/env node
var readline = require('readline');

var rl = readline.createInterface({
	input:process.stdin,
	output: process.stdout
});

//rl.question('Hello friend... how are you?', (answer) => {
//console.log('Thank you for your valuable feedback:', answer);
//rl.close();
//});

rl.prompt();

rl.on('close', (line) => {
	console.log('we are closed');
}).on('line', (line) => {
	switch(line.trim()){
		case 'hello': console.log('hi!'); break;
		default: console.log('wat?'); break;
	}

	rl.prompt();
})
