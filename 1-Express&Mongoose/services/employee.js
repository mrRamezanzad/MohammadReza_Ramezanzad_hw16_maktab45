let employeeModel = require('../models/employee')

module.exports = {
    dropCollection: (model = employeeModel) => {
        model.remove({}, (err, employees) => {
            if (err) console.log(err)
            return console.log(employees)

        })
    },
    create: (employeeInfo) => {
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
                    console.log(employee);
                })
            })
        } else {
            return new employeeModel({
                name: employeeInfo.name,
                cin: employeeInfo.cin,
                city: employeeInfo.city,
                county: employeeInfo.county,
                registerDate: employeeInfo.registerDate,
                telephone: employeeInfo.telephone,
            }).save((err, employee) => {
                if (err) console.log(err.message)
                console.log(employee);
            })
        }
    },
    read: (match) => {
        employeeModel.find(match, (err, employees) => {
            if (err) console.log(err);
            return console.log(employees);
        })

    },
    update: (match, updateInfo) => {
        employeeModel.findOneAndUpdate(
            match, updateInfo, {
                new: true
            }, (err, employee) => {
                if (err) console.log(err);
                return console.log(employee);
            })
    },
    delete: (match) => {
        employeeModel.deleteOne(match, (err, employee) => {
            if (err) console.log(err);
            return console.log(employee);
        })
    }
}