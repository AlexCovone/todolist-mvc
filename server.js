// Initialize express
const express = require('express') 

// Declares 'app' as express function
const app = express() 

// connectDB loads the module and gives access to connectDB export in our database file in our config folder. Allows us to connect to our database.
const connectDB = require('./config/database') 

//homeRoutes sends all requests on the home route ('/') to our appropriate home router based on what type of http request it is (post, get, put, delete)
const homeRoutes = require('./routes/home') 

//todoRoutes sends all requests on the todos route ('/todos') to our appropriate todos router based on what type of http request it is (post, get, put, delete)
const todoRoutes = require('./routes/todos')

// Allow us to use environment files. Go into our config folder and find a .env file
require('dotenv').config({path: './config/.env'}) 


//Calling function from database.js via export in order to connect to our database
connectDB() 

//What view engine we are using - EJS
app.set('view engine', 'ejs') 

//Serve static files (e.g. CSS, JavaScript, images, etc) in public folder
app.use(express.static('public'))

//Middleware method to recognize the incoming request object as strings or arrays - replaces body parser
app.use(express.urlencoded({ extended: true })) 
//Middleware method to recognize the incoming request object as a JSON object - replaces body parser
app.use(express.json()) 

//Any request that occurs on the '/' route will be routed to our variable homeRoutes - which then redirects us to the home.js file in the routes folder.
app.use('/', homeRoutes)

//Any request that occurs on the '/todos' route will be routed to our variable todoRoutes - which then redirects us to the todos.js file in the routes folder.
app.use('/todos', todoRoutes)
 
//Listening on the environment variable PORT
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})     