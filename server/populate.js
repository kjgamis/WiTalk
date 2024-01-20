require('dotenv').config()
const connectDb = require('./db/connect')
const Interpreter = require('./models/Interpreter')
const jsonInterpreters = require('../src/db.json')

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    await Interpreter.deleteMany()
    await Interpreter.create(jsonInterpreters)
    process.exit(0)
  } catch (error) {
    console.log(error)
  }
}

start()
