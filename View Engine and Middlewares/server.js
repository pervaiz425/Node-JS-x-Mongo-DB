const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: true }));

// GET method to render the form
app.get("/calculator", (req, res) => {
  res.render("index");
});

// POST method to handle form submission
app.post("/calculator", (req, res) => {
  const { a, b } = req.body;
  console.log(req.body);
  // Perform calculation (addition in this case)
  const result = parseInt(a) + parseInt(b);

  // Render the form with the result embedded in a div
  res.render("index", { res: result });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

