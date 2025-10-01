const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://meeravachhani:12345@mcaz1.2rlv8vi.mongodb.net/?retryWrites=true&w=majority&appName=mcaz1", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  startYear: Number,
  endYear: Number,
  enrollment: Number,
  address: String,
});

const Student = mongoose.model("Student", studentSchema);

console.log("MongoDB connected successfully");

const student = new Student({
  name: "viha Patel",
  department: " Science",
  startYear: 2020,
  endYear: 2024,
  enrollment: 126756,
  address: "Main St, Anytown, USA",
});

// student
//   .save()
//   .then(() => {
//     console.log("Student saved successfully");
   
//   })
//   .catch((error) => {
//     console.error("Error saving student:", error);
//   });



// Student.find()
//   .then((students) => {
//     console.log("All Students:");
//     console.log(students);
//   })
//   .catch((error) => {
//     console.error("Error fetching students:", error);
//   });


Student.find({ department: "Computer Science" })
  .then((students) => {
    console.log("Science Department Students:");
    console.log(students);
  })
  .catch((error) => {
    console.error("Error fetching students:", error);
  });
