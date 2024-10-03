const express = require('express')
const { catchAsyncErrors } = require('../../utils/tryCatch')
const { userApi } = require('../../controllers/user.controller')
const userRoutes = express.Router()

userRoutes.get('/public', catchAsyncErrors(userApi))

module.exports = userRoutes
