const student = require("../models/student");

// Then use `student` everywhere in this file

exports.index = (req, res) => {
  student.find()
    .then((allstudent) => {
      console.log("All student retrieved successfully:", allstudent);
      res.send({ message: "student retrieved successfully", data: allstudent });
    })
    .catch((error) => {
      console.error("Error retrieving student:", error);
    });
};

exports.show = (req, res) => {
  //Song.find({ _id: req.params.id })
  student.findById(req.params.id)
    .then((student) => {
      console.log("All student retrieved successfully:", student);
      res.send({ message: "student retrieved successfully", data: student });
    })
    .catch((error) => {
      console.error("Error retrieving songs:", error);
    });
};

exports.store = (req, res) => {
  const newstudent = new student({
    name: req.body.name,
    department: req.body.department,
    enrollment: req.body.enrollment,
    startyear: req.body.startyear,
    endyear: req.body.endyear    
  });

  newstudent
    .save()
    .then(() => {
      console.log("New student added successfully");
    })
    .catch((error) => {
      console.error("Error adding new student:", error);
    });

  res.send({ message: "Data stored successfully", data: newstudent });
};

exports.update = (req, res) => {
  student.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatestudent) => {
      console.log("student updated successfully:", updatestudent);
      res.send({ message: "Sonstudentg updated successfully", data: updatestudent });
    })
    .catch((error) => {
      console.error("Error updating student:", error);
    });
};

exports.delete = (req, res) => {
  student.findByIdAndDelete(req.params.id)
    .then(() => {
      console.log("student deleted successfully");
      res.send({ message: "student deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting song:", error);
    });
};