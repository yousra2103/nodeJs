const express= require('express');
const app = express();
app.use(express.json());
require('./config/connect');




const productRouter = require("./routers/produit")
 app.use("/apiproduit",productRouter);

const userRouter= require("./routers/user")
app.use("/apiuser",userRouter);










app.listen('3000', ()=>{
    console.log("the server's running on local host 3000");
})