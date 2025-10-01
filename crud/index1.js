const express = require("express");
const mongoose = require("mongoose");

const studentRoute = require("./route/studentRoute");
const app = express();
const PORT = 80;
app.use(express.json());

mongoose.connect("mongodb+srv://meeravachhani:12345@mcaz1.2rlv8vi.mongodb.net/mcazone"
) .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

app.use("/students", studentRoute);

app.listen(PORT, () => {
  console.log("server is running : 127.0.0.1" + PORT);
});