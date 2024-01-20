require('dotenv').config()
const { getEnvSecrets } = require('gae-env-secrets')
var app = require('./app')
const connectDb = require('./db/connect')
var port = process.env.PORT || '3000'

const start = async () => {
  try {
    let mongoUri

    try {
      if (process.env.ENV === "production") {
        getEnvSecrets().then(() => {
          mongoUri = process.env['MONGO_URI']; // value from Secret Manager
        });
      } else {
        mongoUri = process.env['MONGO_URI']
      }
    } catch (error) {
      console.error(`Error: Unable to fetch secrets from ${process.env.ENV}`, error)
    }

    // Check if mongoUri is truthy before attempting to connect
    if (mongoUri) {
      try {
        await connectDb(mongoUri)
      } catch {
        console.error(`Unable to connect to the database`)
      }
    }

    app.listen(port, () => {
      console.log(`Listening on port ${port}`)
    })
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
}

start()
