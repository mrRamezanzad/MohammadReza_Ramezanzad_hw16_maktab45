const mongoose = require('mongoose')

module.exports = mongoose.model('employee', mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    id: {
        type: String,
    },
    gender: {
        type: String,
        enum: ["female", "male"],
    },
    manager: {
        type: Boolean,
    },
    birthday: {
        type: Date,
    }

}))