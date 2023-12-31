const {sum, subtract} = require("umarpervaiz-calculator");

//require returns module.exports from the file. In this case, it returns an object with sum and subtract functions.

//This is how we import built-in modules
const fs = require("fs");
const os = require("os");
console.log(sum(1,2)) // 3
console.log(subtract(2,1)) // 1
console.log(os.freemem());
