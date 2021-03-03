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
        ...(req.body.firstName) && {
            firstName: req.body.firstName
        },
        ...(req.body.lastName) && {
            lastName: req.body.lastName
        },
        ...(req.body.id) && {
            id: req.body.id
        },
        ...(req.body.gender) && {
            gender: req.body.gender
        },
        ...(req.body.manager) && {
            manager: req.body.manager
        },
        ...(req.body.birthday) && {
            birthday: new Date(req.body.birthday)
        }
    }

    Employee.create([newEmployeeInfo], (employee) => {
        if (employee) {
            res.status(201).json(employee)
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    })
})

// ================= read
router.get("/employee/getAll", (req, res) => {
    Employee.read({}, (employees) => {
        if (employees) {
            res.json(employees)
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    })
})

router.get("/employee/get", (req, res) => {
    console.log("queried id", req.query.id);
    Employee.read({
        _id: req.query.id
    }, (employee) => {
        if (employee) {
            res.json(employee)
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    })
})

// ================= update 
router.put("/employee/update", (req, res) => {

    let employeeUpdateInfo = {
        ...(req.body.firstName) && {
            firstName: req.body.firstName
        },
        ...(req.body.lastName) && {
            lastName: req.body.lastName
        },
        ...(req.body.id) && {
            id: req.body.id
        },
        ...(req.body.gender) && {
            gender: req.body.gender
        },
        ...(req.body.manager) && {
            manager: req.body.manager
        },
        ...(req.body.birthday) && {
            birthday: req.body.birthday
        }
    }

    Employee.update({
        _id: req.query.id
    }, employeeUpdateInfo, (employee) => {
        if (employee) {
            res.json(employee);
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    })
})

// =================== delete
router.delete("/employee/delete", (req, res) => {

    console.log(req.query.id);
    Employee.delete({
        _id: req.query.id
    }, (response) => {
        if (response) {
            res.json(response)
        } else {
            res.json({
                msg: "something went wrong"
            })
        }
    })
})


module.exports = router