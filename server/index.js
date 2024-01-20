require('dotenv').config()
var app = require('./app')
const connectDb = require('./db/connect')
var port = process.env.PORT || '3000'

const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`listening to port ${port}`)
    })
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
