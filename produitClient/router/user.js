const express = require("express");
const router = express.Router();
const User = require("../model/user");


router.post("/add",(req,res)=>{
    data = req.body
    user = new User(data)
    user.save()
    .then((saveUser)=>{
       res.send(saveUser)
    })
    .catch((err)=>{
        res.send(err)
    })
})
router.get("/get",(req,res)=>{
User.find()
.then((users)=>{
    res.send(users)
})
.catch((err)=>{
    res.send(err)
})
})

router.put("/update/:id",(req,res)=>{
    myId= req.params.id
    newData = req.body
User.findByIdAndUpdate({_id:myId},newData)
.then((updated)=>{
    res.send(updated)
})
.catch((err)=>{
    res.send(err)
})
})
router.delete("/delete/:id",(req,res)=>{
    myId= req.params.id
    newData = req.body
User.findByIdAndDelete({_id:myId},newData)
.then((updated)=>{
    res.send(updated)
})
.catch((err)=>{
    res.send(err)
})
})
module.exports = User ;