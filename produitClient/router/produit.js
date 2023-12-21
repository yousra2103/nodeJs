const express = require("express");
const router = express.Router();
const Produit = require("../model/produit");



router.post("/add",(req,res)=>{
    data = req.body
    prd = new Produit(data)
    prd.save()
    .then((savePrd)=>{
       res.send(savePrd)
    })
    .catch((err)=>{
        res.send(err)
    })
})
router.get("/get",(req,res)=>{
Produit.find()
.then((prodduits)=>{
    res.send(produits)
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
.then((deleted)=>{
    res.send(deleted)
})
.catch((err)=>{
    res.send(err)
})
})
module.exports = Produit;