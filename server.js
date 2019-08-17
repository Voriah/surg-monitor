const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const pino = require('express-pino-logger')();
const routes = require('./routes')
const path = require('path')
const PORT = process.env.PORT || 3001
const app = express()
var router = express.Router();

router.use(routes)
app.use(routes)
app.use(bodyParser.urlencoded({extended: true }))
app.use(bodyParser.json())
// app.use(express.static('src'))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/surg-monitor'
mongoose.connect(MONGODB_URI, {useNewUrlParser: true})

app.listen(PORT, function () {
    console.log(`Server running on ${PORT}`)
})