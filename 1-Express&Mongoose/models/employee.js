const mongoose = require('mongoose')

module.exports = mongoose.model('employee', mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    id: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ["female", "male"],
    },
    manager: {
        type: Boolean,
    },
    birtday: {
        type: Date,
    }

}))