//Initialize express
const express = require('express')

//Declare 'router' to create a new router object
const router = express.Router()

//Declare 'homeController' - gives access to exports in home.js file in controller folder
const homeController = require('../controllers/home')

//Router listening for a GET request on the root home route '/home/'. 
//When heard, will retrieve the exported getIndex method on the homeController route
router.get('/', homeController.getIndex) 

//Exports router variable
module.exports = router