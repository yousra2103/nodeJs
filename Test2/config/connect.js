const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TEST')

.then(
()=>{
    console.log("correctement connecté avec mongodb");
}
)
.catch(
    (error)=>{
        console.log("executé avec erreurs",error);

    }
)
module.exports= mongoose;