const express = require('express')
const publicRoutes = require('./publicRoutes/public.routes')
const protectedRoutes = require('./protectedRoutes/protected.routes')
const routes = express.Router()

routes.use(publicRoutes)

// here, you can use any middleware to apply for the below routes as JWT, role base etc.
routes.use(protectedRoutes)

module.exports = routes