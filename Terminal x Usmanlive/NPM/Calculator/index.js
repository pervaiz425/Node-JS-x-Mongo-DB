//This is how we import single export
const sum = require("./sum");
const subtract = require("./subtract");
const multiply = require("./multiply");

//This is how we do multiple exports  
const expor = {
    sum,
    subtract,
    multiply,
}
module.exports = expor;