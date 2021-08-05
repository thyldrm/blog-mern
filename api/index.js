const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use("/",(req,res)=>{
    console.log("server create")
})

//--DB CONNECT
mongoose.connect("mongodb://localhost/blogMern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(console.log("Connected"))
.catch((err) => console.log(err));

app.listen("8080", ()=> {
    console.log("Backend is running.")
})