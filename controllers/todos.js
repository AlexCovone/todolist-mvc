//Declare 'Todo' - gives access to exports in Todo.js in models folder
const Todo = require('../models/Todo')

//Object that holds exported values and functions from this module
module.exports = {

    //getTodos asynchronous method
    getTodos: async (req,res)=>{
        try{

            //Declare todoItems - await Todo.find method.
            //Occurs in our Todo.js file in our models folder (see required variable)
            //todoItems is turned into an array (each element is a document) with the help of Mongoose
            const todoItems = await Todo.find()

            //Declare itemsLeft - await Todo.countDocuments method.
            //Hard-code completed property to be false
            //Occurs in our Todo.js file in our models folder (see required variable)
            const itemsLeft = await Todo.countDocuments({completed: false})

            //Response - render method.
            //Use 'todos.ejs' in our views folder
            //Render response object - todoItems is renamed 'todos', itemsLeft is renamed 'left' in our todos.ejs file
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft})

        //Catch error
        }catch(err){
            console.log(err)
        }
    },

    //createTodo asynchronous method
    createTodo: async (req, res)=>{
        try{

            //Await Todo.create method
            //Occurs in our Todo.js file in our models folder (see required variable)
            //Parses user request via form and assign to todo in object. Hard-coded completed property to be false
            await Todo.create({todo: req.body.todoItem, completed: false})
            console.log('Todo has been added!')

            //Response redirect function - redirects to /todos route
            res.redirect('/todos')

        //Catch error
        }catch(err){
            console.log(err)
        }
    },

    //markComplete asynchronous method
    markComplete: async (req, res)=>{
        try{

            //Await Todo.findOneAndUpdate method
            //
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    