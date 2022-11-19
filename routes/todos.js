// Initialize express
const express = require('express')

//Declare 'router' to create a new router object
const router = express.Router()

//Declare 'todosController' - gives access to exports in todo.js file in controller folder
const todosController = require('../controllers/todos')

//Router listening for a GET request on the root todos route '/todos/'
//When http method matches GET on the root todos route, will retrieve the exported getTodos method on the todosController route
router.get('/', todosController.getTodos)

//Router listening for a POST request on the '/createTodo' route in '/todos/'
//When http method matches POST on '/craeteTodo' route in '/todos/', will retrieve the exported createTodo method on the todosController
router.post('/createTodo', todosController.createTodo)

//Router listening for a PUT request on the '/markComplete' route in '/todos/'
//When http method matches PUT on '/markComplete' route in '/todos/', will retrieve the exported markComplete method on the todosController 
router.put('/markComplete', todosController.markComplete)

//Router listening for a PUT request on the '/markIncomplete' route in '/todos/'
//When http method matches PUT on '/markIncomplete' route in '/todos/', will retrieve the exported markIncomplete method on the todosController
router.put('/markIncomplete', todosController.markIncomplete)

//Router listening for a DELETE request on the '/deleteTodo' route in '/todos/'
//When http method matches DELETE on '/deleteToDo' route in /todos/', will retrieve the exported deleteTodo method on the todosController
router.delete('/deleteTodo', todosController.deleteTodo)

//Exports router variable
module.exports = router