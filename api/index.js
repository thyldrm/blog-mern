const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const postRoute = require("./routes/posts")

const app = express();

//--MIDDLEWARES
app.use(express.json());


//--DB CONNECT
mongoose.connect("mongodb://localhost/blogMern", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})
.then(console.log("Connected"))
.catch((err) => console.log(err));


//--ROUTES
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);



app.listen("8080", ()=> {
    console.log("Backend is running.")
})