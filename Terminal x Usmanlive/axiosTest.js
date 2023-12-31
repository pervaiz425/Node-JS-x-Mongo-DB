const axios = require('axios');

//Axios is a promise-based HTTP Client for node.js and the browser. It is isomorphic (= it can run in the browser and nodejs with the same codebase). On the server-side it uses the native node.js http module, while on the client (browser) it uses XMLHttpRequests.
//Axios is a Javascript library used to make HTTP requests from node.js or XMLHttpRequests from the browser that also supports the ES6 Promise API.
axios.get("https://catfact.ninja/fact").then((response) => {
    console.log(response.data); 
}).catch((error) => {
    console.log(error);
});


//async await approach

async function getCatFact()
{
    try
    {
        let response = await axios.get("https://catfact.ninja/fact");
        console.log("Hello World 2");
        console.log(response.data);
    }
    catch(error)
    {
        console.log(error);
    }
    console.log("Hello World");
}

console.log("Hello World 1");

getCatFact();