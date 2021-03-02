const express = require('express'),
  router = express.Router()


// adding company services
const Company = require('../services/company')

// crud services routes
// Company.dropCollection()

// Company.create([{
//     name: "rastad",
//     cin: 1,
//     city: "tehran",
//     county: "eslamshar",
//     registerDate: Date.now(),
//     telephone: 09191234533,
//   },{
//     name: "afra",
//     cin: 2,
//     city: "tehran",
//     county: "eslamshar",
//     registerDate: Date.now(),
//     telephone: 09191234533,
//   },{
//     name: "Montego",
//     cin: 3,
//     city: "tehran",
//     county: "eslamshar",
//     registerDate: Date.now(),
//     telephone: 09191234533,
//   },])


// Company.update({_id: "603e882fb0e0560348a1c8bb"},{name: "javeed"})
// Company.delete({_id: "603e882fb0e0560348a1c8bb"})
// Company.read()


// ================= crud routes =================

// ================= create 
router.post("/company/create", (req, res) => {
  let newCompanyInfo = {
    name: req.body.name,
    cin: req.body.cin,
    city: req.body.city,
    county: req.body.county,
    registerDate: new Date(req.body.registerDate),
    telephone: req.body.telephone
  }

  Company.create([newCompanyInfo], (company) => {
    res.status(201).json(company)
  })
})

// ================= read
router.get("/company/getAll", (req, res) => {
  Company.read({}, (companies) => {
    res.json(companies)
  })
})

router.get("/company/get", (req, res) => {
  console.log("queried id", req.query.id);
  Company.read({
    _id: req.query.id
  }, (company) => {
    res.json(company)
  })
})

// ================= update 
router.put("/company/update", (req, res) => {

  let companyUpdateInfo = {
    name: req.body.name,
    cin: req.body.cin,
    city: req.body.city,
    county: req.body.county,
    registerDate: new Date(req.body.registerDate),
    telephone: req.body.telephone
  }

  Company.update({
    _id: req.query.id
  }, companyUpdateInfo, (company) => {
    res.json(company);
  })
})

// =================== delete
router.delete("/company/delete", (req, res) => {

  Company.delete({
    _id: req.query.id
  }, (response) => {
    res.json(response)
  })
})


module.exports = router