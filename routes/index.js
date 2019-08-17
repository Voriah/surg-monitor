const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.use(function(req, res) {
    // console.log("rout")
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router