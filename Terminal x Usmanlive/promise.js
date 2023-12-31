function makePizza(flavour)
{
  return new Promise((resolve, reject) => {
    console.log("Preparing Pizza");
    if(flavour === "Fajita")
    {
      reject("Sorry Fajita is not available");
    }
    setTimeout(() => 
    {
      resolve(flavour + " Pizza is ready");
    }, 6000)
  }); 
}

makePizza("Fajita").then((data) => {console.log(data);}).catch((error) => {console.log(error)});  //This is how we call the promise

