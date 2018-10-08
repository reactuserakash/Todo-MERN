const express = require("express")
const bodyParesr = require("body-parser");
const mongoose = require("mongoose");

//import routes
const todos = require("./routes/ToDo");

//connect to the databse
var db = require("./config/Config").mongoURI
mongoose.connect(db).then(()=>{
    console.log("Database connected")
}).catch((err)=>{
    console.log(err)
})

//create express app
const app = express()
app.use(bodyParesr.json())

//use routes
app.use("/todoapi",todos)

app.get("/",(req,res)=>{
    res.send("Server Page")
})

app.listen(4000,()=>{
    console.log('Server listening at port 4000')
})