const mongoose = require("mongoose");
const User = mongoose.model("User",{
    name :{
        type : String,
    },
    lastName :{
        type :String,
    },
    cin :{
        type : Number,
    }
})

module.exports= User;