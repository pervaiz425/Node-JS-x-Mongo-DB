function makePizza(flavour,callback)
{
  setTimeout(function()
  {
    console.log("Preparing Pizza");
    callback(flavour);
  }, 5000);
  // console.log(check);
  console.log("Muhammad")
}

function pizza(pizz)
{
  console.log("Eating " + pizz);
}

makePizza("Chicken", pizza)