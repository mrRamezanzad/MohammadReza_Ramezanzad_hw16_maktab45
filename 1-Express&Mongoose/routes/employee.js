const express = require('express'),
    router = express.Router()

// adding employee services
const Employee = require('../services/employee')

// Employee.find()
// Employee.dropCollection()
Employee.find()

// Employee.create({
//     firstName: "ali",
//     lastName: "mirzaee",
//     id: 1,
//     gender: "male",
//     manager: true,
//     birthday: Date.now(),
// })

router.get("/employee", (req, res) => {
    res.send("employee router")
})
module.exports = router