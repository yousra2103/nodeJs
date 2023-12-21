const mongoose = require('mongoose');
const User = mongoose.model('user', {
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    lastName: {
        type: String,
    }

})
module.exports = User;