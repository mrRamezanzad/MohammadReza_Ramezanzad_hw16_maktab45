const employeeModel = require('../models/employee')

module.exports = {
    dropCollection: () => {
        employeeModel.remove({}, (err, employees) => {
            if (err) console.log(err)
            console.log(employees)

        })
    },
    create: (employeeInfo) => {
        return new employeeModel({
            firstName: employeeInfo.firstName,
            lastName: employeeInfo.lastName,
            id: employeeInfo.id,
            gender: employeeInfo.gender,
            manager: employeeInfo.manager,
            birthday: employeeInfo.birthday,
        }).save((err, company) => {
            if (err) console.log(err.message)
            console.log(company);
        })
    },
    find: () => {
        employeeModel.find({}, (err, employees) => {
            if (err) console.log(err);
            console.log(employees);
        })
    }
}