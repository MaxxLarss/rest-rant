const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

// GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index')
  })
  
  