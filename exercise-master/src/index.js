/**
 * author       : Sidath Samarasinghe
 * created      : 2019-10-05
 * description  : asynchronous solution
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

asyncInLoopWithAwait()

async function asyncInLoopWithAwait() {
	
  console.log('\nasynchronous solution\n');

  const output = []; 

  for (let i = 1; i <= 100; i++) {
    
	try {
      	//Wait for getting response in every iteration
		
		let word = await getRandomWord({ withErrors: true });

		//let word = await getRandomWord({ slow: true }); 

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
				//console.log(`${i}: ${word}`);
				output[i-1] = `${i}: ${word}`;
			}	
		}


    	} catch (error) { 
			output[i-1] = `${i}: It shouldn't break anything!`;
    	}
  }
  
  for(let i = 0 ; i < 100 ; i++) {
	
		//console.log(output[i]);
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





