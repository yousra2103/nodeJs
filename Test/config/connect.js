const mongoose = require("mongoose")
 mongoose.connect('mongodb://localhost:27017/Test2')

.then(
    ()=>{
        console.log("correctement connecté à MongoDb ");
    }
)
.catch(
    (error)=>{
              console.log("exécuté avec erreur", error);
    }
)
module.exports= mongoose;