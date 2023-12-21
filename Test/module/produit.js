const mongoose = require('mongoose');
const Produit = mongoose.model('Produit', {
    name: {
        type: String,
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }

})
module.exports = Produit;