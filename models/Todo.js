//Include/require/init mongoose
const mongoose = require('mongoose')

//Declare TodoSchema - new Mongoose schema for structure
const TodoSchema = new mongoose.Schema({

  //todo key:value pair
  //key = todo. value = object
  //todo will be a string and will be required
  todo: {
    type: String,
    required: true,
  },

  //completed key:value pair
  //key = completed. value = object
  //completed will be a boolean value and will be required
  completed: {
    type: Boolean,
    required: true,
  },

  cost: {
    type: Number,
    required: true
  }
})

//Exports new model of 'Todo' in our created TodoSchema
module.exports = mongoose.model('Todo', TodoSchema)