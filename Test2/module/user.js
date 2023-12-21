const mongoose = require('mongoose');
const user = mongoose.model('User', {
    name:{
        type : String ,
    } ,
    lastName:{
        type : String ,
    }
    ,
    age:{
        type : Number ,
    },
    email:{
        type : String ,
    },
    password :{
        type : String ,
    }
    
    

})
module.exports = user;