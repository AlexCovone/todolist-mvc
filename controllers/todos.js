//Declare 'Todo' - gives access to exports in Todo.js in models folder
const Todo = require('../models/Todo')

// Declare 'Budget' - gives access to exports in Todo.js in models folder
const Budget = require('../models/Todo')

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
            console.log(itemsLeft)
            
            //Declare budgetLeft - await findOne method on Budget model in Todo.js file in models folder
            let budgetLeft = await Budget.findOne({})
            console.log(budgetLeft)


            //Insert conditional here to check for null value - no user inputted object?

            //Declare total - Takes budgetLeft object and retrieves budget property
            let total = budgetLeft.budget
            console.log(total)

            //Response - render method.
            //Use 'todos.ejs' in our views folder
            //Render response object - todoItems is renamed 'todos', itemsLeft is renamed 'left' in our todos.ejs file
            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, budget: total})

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
            await Todo.create({todo: req.body.todoItem, cost: req.body.cost, completed: false, })
            console.log('Todo has been added!')

            //Response redirect function - redirects to /todos route
            res.redirect('/todos')

        //Catch error
        }catch(err){
            console.log(err)
        }
    },

    // createBudget asynchronous method
    createBudget: async (req, res) => {
        try{

            //Await Budget.create method
            //Occurs in our Todo.js file in our models folder (see required Budget variable)
            //Parses user request via form and assign to Budget in object.
            await Budget.create({budget: req.body.budget})
            console.log('Budget Created!')

            //Response redirect function - redirects to /todos route
            res.redirect('/todos')

        // Catch error
        }catch(err){
            console.log(err)
        }
    },

    //markComplete asynchronous method - complete a todo item 
    markComplete: async (req, res)=>{
        try{

            //Await Todo.findOneAndUpdate method
            //Find document with id that matches parsed PUT request from user
            //todoIdFromJSFile is coming from main.js file in public folder (markComplete function)
            //Set completed property to 'true'
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')

            //Sends JSON response to main.js file in public folder - markComplete function
            res.json('Marked Complete')

        //Catch error
        }catch(err){
            console.log(err)
        }
    },

    //markIncomplete asynchronous method - mark a complete todo item incomplete
    markIncomplete: async (req, res)=>{
        try{

            //Await Todo.findOneAndUpdate method
            //Find document with id that matches parsed PUT request from user
            //todoIDfromJSFile is coming from main.js file in public folder (markIncomplete function)
            //Set completed property to 'false'
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            
            //Sends JSON response to main.js file in public folder - markIncomplete function
            res.json('Marked Incomplete')

        //Catch error
        }catch(err){
            console.log(err)
        }
    },

    //deleteTodo asynchronous method - delete a todo item from database
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{

            //Await Todo.findOneAndDelete method
            //Find document with id that matches parsed DELETE request from user
            //Delete document in database
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')

            //Send JSON response to main.js file in public folder - deleteTodo function
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}  