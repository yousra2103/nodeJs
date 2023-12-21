const express = require("express");
const app = express();
require("./config/connect");
app.use(express.json());



const userRouter = require("./router/user");
const produitRouter = require("./router/produit");



app.use("/client", userRouter);
app.use("/article", produitRouter);




app.listen(3000, ()=>{

    console.log("correctement connécté à localhost 3000");
})