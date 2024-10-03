const express = require('express')
const demoRoutes = require('./demo.routes')
const protectedRoutes = express.Router()

protectedRoutes.use('/demo', demoRoutes)
// add all your protected routes here

module.exports = protectedRoutes
