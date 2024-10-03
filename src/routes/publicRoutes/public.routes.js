const express = require('express')
const userRoutes = require('./user.routes')
const publicRoutes = express.Router()


publicRoutes.use("/public", userRoutes)
// add all your public routes here

module.exports = publicRoutes
