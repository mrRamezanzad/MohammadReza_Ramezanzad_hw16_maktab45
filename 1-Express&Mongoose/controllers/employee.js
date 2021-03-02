const express = require('express'),
    router = express.Router()

// adding employee services
const Employee = require('../services/employee')


// ============== crud services routes
// Employee.dropCollection()

// Employee.create([{
//     firstName: "ali",
//     lastName: "abbsi",
//     id: 1,
//     gender: "male",
//     manager: false,
//     birthday: Date.now()
// },{
//     firstName: "mitra",
//     lastName: "vahidee",
//     id: 2,
//     gender: "female",
//     manager: true,
//     birthday: Date.now()
// },{
//     firstName: "masood",
//     lastName: "rajabi",
//     id: 3,
//     gender: "male",
//     manager: false,
//     birthday: Date.now()
// },])


// Employee.update({_id: "603e930785955a0a1cb0c8cb"},{lastName: "javeed"})
// Employee.delete({_id: "603e930785955a0a1cb0c8cb"})
Employee.read()

router.get("/employee", (req, res) => {
    res.send("employee router")
})
module.exports = router