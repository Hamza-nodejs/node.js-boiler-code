const express = require("express")
const { catchAsyncErrors } = require("../../utils/tryCatch")
const { protectedUser } = require("../../controllers/demo.controller")
const demoRoutes = express.Router()

demoRoutes.get("/protected", catchAsyncErrors(protectedUser));

module.exports = demoRoutes