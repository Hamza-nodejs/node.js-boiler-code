const express = require('express')
const publicRoutes = require('./publicRoutes/public.routes')
const protectedRoutes = require('./protectedRoutes/protected.routes')
const routes = express.Router()

routes.use(publicRoutes)
routes.use(protectedRoutes)

module.exports = routes