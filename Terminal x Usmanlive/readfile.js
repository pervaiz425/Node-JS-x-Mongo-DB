const fs = require('fs');

const data = fs.readFileSync('testFile.txt', 'utf-8');

console.log(data);

