//importing multiple exports and doing object destructuring
const {sum, subtract} = require("./Calculator/index.js");
console.clear();
console.log("My Code is Starting...");
console.log(subtract(1,2));
console.log(sum(1,2));