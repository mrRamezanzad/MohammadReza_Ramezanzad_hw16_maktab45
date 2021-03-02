const express = require('express'),
  router = express.Router()
  

// adding company services
const Company = require('../services/company')



// Company.dropCollection(companyModel)


// Company.create({
//     name: "rastad",
//     cin: 1,
//     city: "tehran",
//     county: "eslamshar",
//     registerDate: Date.now(),
//     telephone: 09191234533,
//   })
  
  // Company.find()


/*create */
router.post('/company', function (req, res) {
  res.send('company page is listening here ...')
})

/* get all */
router.get('/company/getAll', function (req, res) {
  res.send('get all.')
})

/* get one */
router.get('/company/get:id', function (req, res) {
  res.send('get one')
})

/* delete */
router.delete('/company', function (req, res) {
  res.send('company page is listening here ...')
})

/* update */
router.put('/company', function (req, res, next) {
  res.send('company page is listening here ...')
})

module.exports = router