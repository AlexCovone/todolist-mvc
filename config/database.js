//Requires Mongoose
const mongoose = require('mongoose')

//Declare connectDB asynchronous function (export and call function on our server.js to connect to our database)
const connectDB = async () => {
  try {
    
    //Declare conn variable to await mongoose connection on environment PORT (.env file)
    const conn = await mongoose.connect(process.env.DB_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

//Export connectDB to be able to call it and connect to database
module.exports = connectDB