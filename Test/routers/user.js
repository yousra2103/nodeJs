const express= require('express');
const User = require('../module/user');
const router = express.Router();



router.post('/add',(req,res)=>{
    
    data = req.body
    prdt = new User(data)
    prdt.save()
    .then((saveProduit)=>{
        res.send(saveProduit)
    })
    .catch((error)=>{
        res.send(error)
    })
})
module.exports = router ;