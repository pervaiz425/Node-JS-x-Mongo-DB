const mongoose = require("mongoose");
const express = require("express");
const {createAuthor, createCourse, getCourse} = require("./operations");
const app = express();
app.use(express.json());
console.log("Hello");
mongoose.connect("mongodb://localhost/Learning").then(async() => {
    console.log("Connected to MongoDB");
    let author = await createAuthor("Mosh", 35);
    console.log(author);
    let course = await createCourse("Node", author._id);
    console.log(course);
    let courses = await getCourse();
    console.log(courses);
})

