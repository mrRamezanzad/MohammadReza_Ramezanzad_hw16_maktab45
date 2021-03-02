const mongoose = require('mongoose')

module.exports = mongoose.model("Company", mongoose.Schema({
    name: {
        type: String,
    },
    cin: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
    },
    county: {
        type: String,
    },
    registerDate: {
        type: Date,
    },
    telephone: {
        type: Number,
    }

}))