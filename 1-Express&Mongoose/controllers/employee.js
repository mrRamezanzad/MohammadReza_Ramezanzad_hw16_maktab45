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
// Employee.read({
//     _id: "603e9cdaecf5174278badbe7"
// }, (e) => {
//     console.log(e);
// })

// ================= crud routes =================

// ================= create 
router.post("/employee/create", (req, res) => {
    let newEmployeeInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        gender: req.body.gender,
        manager: req.body.manager,
        birthday: new Date(req.body.birthday)
    }

    Employee.create([newEmployeeInfo], (employee) => {
        res.status(201).json(employee)
    })
})

// ================= read
router.get("/employee/getAll", (req, res) => {
    Employee.read({}, (employees) => {
        res.json(employees)
    })
})

router.get("/employee/get", (req, res) => {
    console.log("queried id", req.query.id);
    Employee.read({
        _id: req.query.id
    }, (employee) => {
        res.json(employee)
    })
})

// ================= update 
router.put("/employee/update", (req, res) => {

    let employeeUpdateInfo = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id,
        gender: req.body.gender,
        manager: req.body.manager,
        birthday: req.body.birthday
    }

    Employee.update({
        _id: req.query.id
    }, employeeUpdateInfo, (employee) => {
        res.json(employee);
    })
})

// =================== delete
router.delete("/employee/delete", (req, res) => {

    console.log(req.query.id);
    Employee.delete({
        _id: req.query.id
    }, (response) => {
        res.json(response)
    })
})


module.exports = router