const fs = require('fs'); 
const readline = require('readline'); 


function detectNumbers(input) {
    const wordToNumbers = new Map([
        ['zero', '0'],
        ['one', '1'],
        ['two', '2'],
        ['three', '3'],
        ['four', '4'],
        ['five', '5'],
        ['six', '6'],
        ['seven', '7'],
        ['eight', '8'],
        ['nine', '9']
    ]);

    let outStr = '';
    let myStr = '';
    let i = 0;
while (i < input.length) {
    if (!isNaN(Number(input[i]))) {
        myStr = ''; // Reset myStr if the character is a number
        outStr += input[i];
        i++;
    } else {

        myStr += input[i];
    
        let keyFound = false; 
        for (const key of wordToNumbers.keys()) {
            if (key.startsWith(myStr)) {
                keyFound = true; // Set flag to true if a key is found
                i++;
                if (wordToNumbers.has(myStr)) {
                    outStr += wordToNumbers.get(myStr);
                    myStr = '';
                    i--;
                    break; // Exit the loop after finding a word and getting a number
                }else break;
            }
        }

        if (!keyFound) {
            myStr = ''; // Reset myStr if no key is found
            i++;
        }
    }
}
    
    const result = outStr.length > 0 ? outStr[0] + outStr[outStr.length - 1] : outStr[0] + outStr[0];
    
    return parseFloat(result);
    
}
detectNumbers('eightwothree')

function readLines() {
    const file = readline.createInterface({ 
        input: fs.createReadStream('./input.txt'), 
        output: process.stdout, 
        terminal: false
    }); 
   let numbs = [];
    file.on('line', (line) => { 
        numbs.push(detectNumbers(line));
    }); 
    file.on('close', () => {
       console.log(numbs)
       const sum = numbs.reduce((acc, current) => acc + current, 0);
       console.log(sum);
    });
    
}

readLines()

