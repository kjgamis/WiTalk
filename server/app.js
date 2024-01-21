const express = require('express')
const cors = require('cors')
const app = express()
require('express-async-errors')
const Problem = require('api-problem')
const problemMiddleware = require('api-problem/lib/middleware')
const errorHandlerMiddleware = require('./middleware/errorHandler')
const interpreter = require('./routes/interpreter')

app.use(cors())
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/interpreters', interpreter)
app.use('*', () => {
  throw new Problem(404, 'Route does not exist')
})

app.use(errorHandlerMiddleware)
app.use(problemMiddleware)

module.exports = app
