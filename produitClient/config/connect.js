const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/ClientEtProduit")


.then(()=>{
    console.log("connecté à mongoose !");
})
.catch(()=>{
    console.log("Erreur de connection !!");
})

module.exports= mongoose;