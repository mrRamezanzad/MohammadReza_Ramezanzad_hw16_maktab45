let companyModel = require('../models/company')

module.exports = {
    dropCollection: (model = companyModel) => {
        model.remove({}, (err, companies) => {
            if (err) console.log(err)
            return console.log(companies)
        })
    },
    create: (companyInfo, callback) => {
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
                    callback(company);
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
                callback(company);
            })
        }
    },
    read: (match, callback) => {
        companyModel.find(match, (err, companies) => {
            if (err) console.log(err);
            callback(companies);
        })
    },
    update: (match, updateInfo, callback) => {
        companyModel.findOneAndUpdate(
            match, updateInfo, {
                new: true
            }, (err, company) => {
                if (err) console.log(err);
                callback(company);
            })
    },
    delete: (match, callback) => {
        companyModel.deleteOne(match, (err, company) => {
            if (err) console.log(err);
            callback(company);
        })
    }
}