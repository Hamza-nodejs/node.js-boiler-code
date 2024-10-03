require('dotenv').config()

const express = require('express')
const cors = require('cors')
const startServer = require('./config/server.config')
const { logger, logRequestDuration } = require('./utils/logger')
const app = express()

// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logRequestDuration)

app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`)
  next()
})

startServer(app)
