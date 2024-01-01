async function exampleFunction() {
  const promise = new Promise((resolve, reject) => {
    // throw new Error("Promise rejected");
    reject(new Error("Promise rejected"));
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });

  console.log("Waiting for promise...");

  try{
  const result = await promise; // This will pause execution until the promise is resolved
  console.log(result); // This will log "Promise resolved" after 2 seconds
  }
  catch(err){
    console.log(err);
  }
  
}

exampleFunction();
