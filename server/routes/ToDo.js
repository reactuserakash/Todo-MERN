const express = require("express");
const router = express.Router();

var {Todo} = require("./../models/ToDoModel");

router.get("/gettodos",(req,res)=>{
    Todo.find().then((todos)=>{
        res.send({todos})
    }).catch((e)=>{

    })
})

router.post("/addtodos",(req,res)=>{
    var newTodo = new Todo ({
        name : req.body.name
    });

    newTodo.save().then((doc)=>{
        res.send(doc)
    })
    //res.send("post request working")
})

router.patch("/completetodos/:id/:isCompleted",(req,res)=>{
    if(req.params.isCompleted === "true") {
        var update = false;
    } else {
        update = true;
    }
    //console.log(update)
    Todo.findByIdAndUpdate(req.params.id,{$set:{completed:update}},{new:true}).then((doc)=>{
        res.send(doc)
    })
})

router.patch("/startodos/:id/:isStar",(req,res)=>{
   if(req.params.isStar === "true") {
       var update = false;
   } else {
       update = true;
   }
   //console.log(update)
   Todo.findByIdAndUpdate(req.params.id,{$set:{star:update}},{new:true}).then((doc)=>{
       res.send(doc)
   })
})

router.delete("/removetodos/:id",(req,res)=>{
    //console.log(req.params)
    Todo.findByIdAndRemove(req.params.id).then((doc)=>{
        res.send(doc)
    })
})

module.exports = router;