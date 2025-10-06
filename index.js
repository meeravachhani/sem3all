const express=require("express");
const mongoes=require("mongoose");

const employeeRoute=require("./Routes/employeeRoute.js");
const port=80;
const app=express();
app.use(express.json());

mongoose.connect("mongodb+svr://")
.then(()=>{
    console.log("mongobd connect successfuly");
})
.catch(err=>{
    console.log("mongobd connection error",err);
    
});

app.use("employee",employeeRoute);

app.listen(port,()=>{
    console.log("running server"+port);
});