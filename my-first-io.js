const fs = require('fs');
let numNewLines = 0;

let buf = fs.readFileSync(process.argv[2]);
const str = buf.toString();
let arr = str.split('\n');
numNewLines = arr.length - 1;
console.log(numNewLines);