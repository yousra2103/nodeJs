const express= require('express');
const Produit = require('../module/produit');
const router = express.Router();



router.post('/add',(req,res)=>{
    
    data = req.body
    prdt = new Produit(data)
    prdt.save()
    .then((saveProduit)=>{
        res.send(saveProduit)
    })
    .catch((error)=>{
        res.send(error)
    })
})
module.exports = router ;