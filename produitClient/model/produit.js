const mongoose = require("mongoose");
const Produit = mongoose.model("Produit",{
    name : {
        type : String,
    },
    descrp : {
        type : String,
    },
    price : {
        type : Number,
    }
})

module.exports= Produit ;