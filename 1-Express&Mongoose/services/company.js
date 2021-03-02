
let companyModel = require('../models/company')

module.exports = {
    dropCollection: (model = companyModel) => {
        model.remove({}, (err, companies) => {
            if (err) console.log(err)
            return console.log(companies)

        })
    },
    create: (companyInfo) => {
        if (Array.isArray(companyInfo)) {

            companyInfo.forEach(company => {
                new companyModel({
                    name: company.name,
                    cin: company.cin,
                    city: company.city,
                    county: company.county,
                    registerDate: company.registerDate,
                    telephone: company.telephone,
                }).save((err, company) => {
                    if (err) console.log(err.message)
                    console.log(company);
                })
            })
        } else {
            return new companyModel({
                name: companyInfo.name,
                cin: companyInfo.cin,
                city: companyInfo.city,
                county: companyInfo.county,
                registerDate: companyInfo.registerDate,
                telephone: companyInfo.telephone,
            }).save((err, company) => {
                if (err) console.log(err.message)
                console.log(company);
            })
        }
    },
    read: (match) => {
        companyModel.find(match, (err, companies) => {
            if (err) console.log(err);
            return console.log(companies);
        })

    },
    update: (match, updateInfo) => {
        companyModel.findOneAndUpdate(
            match, updateInfo, {
                new: true
            }, (err, company) => {
                if (err) console.log(err);
                return console.log(company);
            })
    },
    delete: (match) => {
        companyModel.deleteOne(match, (err, company) => {
            if (err) console.log(err);
            return console.log(company);
        })
    }
}