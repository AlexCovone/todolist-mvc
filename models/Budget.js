//Include/require/init mongoose
const mongoose = require('mongoose')

// // Declare budgetSchema - new Mongoose schema for structure
const budgetSchema = new mongoose.Schema({
    budget: {
      type: Number,
      required: false,
    }
})

//Exports new model of 'Budget' in our created budgetSchema
module.exports = mongoose.model('Budget', budgetSchema)