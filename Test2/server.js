const express = require('express');
const app = express();
const User = require('./module/user')
app.use(express.json())
require('./config/connect')
const bcrypt= require('bcrypt')





app.post("/register",(req,res)=>{
   data = req.body
   user = new User(data)
   salt = bcrypt.genSaltSync(10)
   passcrypt = bcrypt.hashSync(data.password,salt)
   user.password = passcrypt
   user.save()
   .then((saveUser)=>{
        res.send(saveUser)

   })
});

app.get("/get",()=>{
    console.log("get chi7aja");
});

app.put("/put",()=>{
    console.log("put chi7aja");
});

app.delete("/delete",()=>{
    console.log("delete chi7aja");
});










app.listen('3000', ()=>{
    console.log('server is running on localhost 3000');
});