const router = require('express').Router()
const surgeryRoutes = require('./surgeryRoutes')

router.use('/surgery', surgeryRoutes)

module.exports = router