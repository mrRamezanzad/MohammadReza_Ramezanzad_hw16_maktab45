let employeeModel = require('../models/employee')

module.exports = {
    dropCollection: (model = employeeModel) => {
        model.remove({}, (err, employees) => {
            if (err) console.log(err)
            return console.log(employees)

        })
    },
    create: (employeeInfo, callback) => {
        if (Array.isArray(employeeInfo)) {

            employeeInfo.forEach(employee => {
                new employeeModel({
                    firstName: employee.firstName,
                    lastName: employee.lastName,
                    id: employee.id,
                    gender: employee.gender,
                    manager: employee.manager,
                    birthday: employee.birthday,
                }).save((err, employee) => {
                    if (err) console.log(err.message)
                    // console.log(employee);
                    callback(employee)
                })
            })
        } else {
            return new employeeModel({
                firstName: employee.firstName,
                lastName: employee.lastName,
                id: employee.id,
                gender: employee.gender,
                manager: employee.manager,
                birthday: employee.birthday,
            }).save((err, employee) => {
                if (err) console.log(err.message)
                // console.log(employee);
                callback(employee)
            })
        }
    },
    read: (match, callback) => {
        employeeModel.find(match, (err, employees) => {
            if (err) console.log(err);
            callback(employees)
        })

    },
    update: (match, updateInfo, callback) => {
        employeeModel.findOneAndUpdate(
            match, updateInfo, {
                new: true
            }, (err, employee) => {
                if (err) console.log(err);
                callback(employee)
            })
    },
    delete: (match, callback) => {
        employeeModel.deleteOne(match, (err, employee) => {
            if (err) console.log(err);
           callback(employee);
        })
    }
}