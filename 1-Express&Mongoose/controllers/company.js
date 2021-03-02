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