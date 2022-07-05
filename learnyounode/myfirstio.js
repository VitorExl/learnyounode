let fs = require('fs');
let buffer = fs.readFileSync(process.argv[2]);
let strings = buffer.toString();
let arrayString = strings.split('\n');

console.log(arrayString.length -1);