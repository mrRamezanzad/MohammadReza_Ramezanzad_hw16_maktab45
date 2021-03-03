const express = require('express'),
  router = express.Router()


const company = require('../models/company')
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
    ...(req.body.name) && {
      name: req.body.name
    },
    ...(req.body.cin) && {
      cin: req.body.cin
    },
    ...(req.body.city) && {
      city: req.body.city
    },
    ...(req.body.county) && {
      county: req.body.county
    },
    ...(req.body.registerDate) && {
      registerDate: new Date(req.body.registerDate)
    },
    ...(req.body.telephone) && {
      telephone: req.body.telephone
    }
  }

  Company.create([newCompanyInfo], (company) => {
    if (company) {
      res.status(201).json(company)
    } else {
      res.json({
        msg: "something went wrong"
      })
    }
  })
})

// ================= read
router.get("/company/getAll", (req, res) => {
  Company.read({}, (companies) => {
    if (companies) {
      res.json(companies)
    } else {
      res.json({
        msg: "something went wrong"
      })
    }
  })
})

// ================= get queries
router.get("/company/get/q=", (req, res) => {

  let selectedRegister = new Date()
  selectedRegister.setFullYear(selectedRegister.getFullYear() - req.query.lt)

  let match = {
    ...(req.query.lt) && {
      registerDate: {
        $gte: selectedRegister
      },
    },
    ...(req.query.id) && {
      _id: req.query.id
    }
  }

  Company.read(match, (company) => {
    if (company) {
      res.json(company)
      // console.log(company);
    } else {
      res.json({
        msg: "nothing found"
      })
    }
  })
});

// ================= update 
router.put("/company/update", (req, res) => {

  let companyUpdateInfo = {
    ...(req.body.name) && {
      name: req.body.name
    },
    ...(req.body.cin) && {
      cin: req.body.cin
    },
    ...(req.body.city) && {
      city: req.body.city
    },
    ...(req.body.county) && {
      county: req.body.county
    },
    ...(req.body.registerDate) && {
      registerDate: new Date(req.body.registerDate)
    },
    ...(req.body.telephone) && {
      telephone: req.body.telephone
    }
  }

  Company.update({
    _id: req.query.id
  }, companyUpdateInfo, (company) => {
    if (company) {
      res.json(company);
    } else {
      res.json({
        msg: "something went wrong"
      })
    }
  })
})

// =================== delete
router.delete("/company/delete", (req, res) => {

  Company.delete({
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