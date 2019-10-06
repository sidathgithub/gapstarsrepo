/**
 * author       : Sidath Samarasinghe
 * created      : 2019-10-05
 * description  : synchronous solution
 */

const { getRandomWordSync, getRandomWord } = require('word-maker');
const fs = require("fs");

var filePath = './program_output.txt';

console.log('It works!');
console.log('\n');

function createNewFile() {

	fs.writeFile(filePath, '', function (err) {
	  
	  if (err) 
		  return console.log(err);

	  console.log('New file created..\n');
	});

}

createNewFile();

synchronousInvoke();

function synchronousInvoke() {
	
	console.log('\nsynchronous solution\n');

	const output = [];

	for (let i = 1; i <= 100; i++) { 
	  
		try {
	  
		if((i % 3 === 0) && (i % 5 === 0)) {
			output[i-1] = `${i}: 'FizzBuzz'`;
		}
		else {
			if(i % 3 === 0 ) {
				output[i-1] = `${i}: 'Fizz'`;
			}
			else if(i % 5 === 0 ) {
				output[i-1] = `${i}: 'Buzz'`;
			}
			else {
				//console.log(i+':'+ ' '+getRandomWordSync({ withErrors: true })); 
				output[i-1] = `${i}: `+getRandomWordSync({ withErrors: true });
				//writeToFile(i+':'+ ' '+getRandomWordSync({ withErrors: true })+ '\n');
				
			}	
		}
		}
		catch (error) { 
			output[i-1] = `${i}: It shouldn't break anything!`;
		}

	}
	
	for(let i = 0 ; i < 100 ; i++) {
	
		console.log(output[i]);
		writeToFile(output[i]+'\n');
	}

}

function writeToFile(strToWrite) {

	//fs.writeFile(filePath, strToWrite, function(err) {
	fs.appendFile(filePath, strToWrite, function(err) {
		if(err) {
			return console.log(err);
		}
	}); 
	
}



