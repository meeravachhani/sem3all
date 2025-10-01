const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: String,
  department: String,
  enrollment: String,
  startyear: String,
  endyear: String,
  
});

const student = mongoose.model("student", studentSchema);

module.exports = student;
