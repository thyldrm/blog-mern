const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use("/",(req,res)=>{
    console.log("server create")
})

app.listen("8080", ()=> {
    console.log("backend running")
})