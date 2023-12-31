const AuthorModel = require("./models/authorModel");

const CourseModel = require("./models/courseModel");

const createAuthor = async (name, age) => {
  let author = new AuthorModel();
  author.name = name;
  author.age = age;
  const finalAuthor = await author.save();
  return finalAuthor;
};
 
const createCourse = async (name, author) => {
  let course = new CourseModel();
  course.name = name;
  course.author = author;
  const finalCourse = await course.save();
  return finalCourse;
};


// The argument passed to the `populate` method in Mongoose represents the path of the property that you want to populate.

// In your code snippet:

// ```javascript
// await CourseModel.find().populate("author");
// ```

// The argument "author" is the path that you're populating. This means that "author" should be a property in your CourseModel schema that's been defined as a reference to another model. 

// In Mongoose, you can create these references by defining a property with type `mongoose.Schema.Types.ObjectId` and providing a `ref` option that points to the model you're referencing.

// When you call `populate("author")`, Mongoose will automatically replace the "author" property (which should be an ObjectId) in each document returned by `CourseModel.find()` with the actual document from the referenced model. This is useful when you want to include information from a related model in your query results.
const getCourse = async () => {
  const courses = await CourseModel.find().populate("author","name -_id").select("author name -_id");
  return courses;
};

module.exports.createAuthor = createAuthor;
module.exports.createCourse = createCourse;
module.exports.getCourse = getCourse;
