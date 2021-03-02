companyModel = require('../models/company')

module.exports = {
    dropCollection: (model) => {
        model.remove({}, (err, companies) => {
            if (err) console.log(err)
            console.log(companies)

        })
    },
    create: (compnayInfo) => {
        return new companyModel({
            name: compnayInfo.name,
            cin: compnayInfo.cin,
            city: compnayInfo.city,
            county: compnayInfo.county,
            registerDate: compnayInfo.registerDate,
            telephone: compnayInfo.telephone,
        }).save((err, company) => {
            if (err) console.log(err.message)
           console.log(company);
        })
    },
    find: () => {
        companyModel.find({}, (err, companies) => {
            if (err) console.log(err);
            console.log(companies);
        })
    }
}