//Declare deleteBtn variable - Selects all elements with 'del' class
const deleteBtn = document.querySelectorAll('.del')

//Declare todoItem variable - Selects all spans with a class of 'not'
const todoItem = document.querySelectorAll('span.not')

//Declare todoComplete variable - Selects all spans with a class of 'completed'
const todoComplete = document.querySelectorAll('span.completed')

//Creates an array from deleteBtn variable (all elements with 'del' class)
//Run forEach loop and add event listener that runs deleteTodo function on a click
Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

//Creates an array from todoItem variable (all spans with a class of 'not')
//Run forEach loop and add event listener that runs markComplete function on a click
Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

//Creates an array from todoComplete variable (all spans with a class of 'completed')
//Run forEach loop and add event listener that runs markIncomplete function on a click
Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

//Asynchronous deleteTodo function
async function deleteTodo(){

    //Declare todoId variable - target paretNode
    const todoId = this.parentNode.dataset.id
    try{

        //Declare response variable - await fetch to 'todos/deleteTodo' on 'todo.js' file in controller folder
        const response = await fetch('todos/deleteTodo', {
            
            //THIS IS WHAT IS BEING SENT OVER VIA FETCH
            //Delete method
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            
            //Converts JS value to a JSON string - todoID is stored in 'todoIdFromJSFile' in the fetch request
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })

        //Await JSON response from controller
        const data = await response.json()
        console.log(data)

        //Method - reload the current URL (refresh)
        location.reload()

    //Catch error
    }catch(err){
        console.log(err)
    }
}

//Asynchronous markComplete function
async function markComplete(){

    //Declare todoId variable - target paretNode
    const todoId = this.parentNode.dataset.id
    try{

        //Declare reponse variable - await fetch to 'todos/markComplete' on 'todos.js' file in controllers folder
        const response = await fetch('todos/markComplete', {
            
            //THIS IS WHAT IS BEING SENT OVER VIA FETCH
            //PUT method
            method: 'put',
            headers: {'Content-type': 'application/json'},
            
            //Converts JS value to JSON string - todoId is stored in 'todoIdFromJSFile' in the fetch request
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })

        //Await JSON response from controller
        const data = await response.json()
        console.log(data)

        //Method - reload the current URL (refresh)
        location.reload()

    //Catch error
    }catch(err){
        console.log(err)
    }
}

//Asynchrnous markIncomplete function 
async function markIncomplete(){

    //Declare todoId variable - target paretNode
    const todoId = this.parentNode.dataset.id
    try{

        //Declare response variable - await fetch to 'todos/markIncomplete' on 'todos.js' file in controllers folder
        const response = await fetch('todos/markIncomplete', {
            
            //THIS IS WHAT IS BEING SENT OVER VIA FETCH
            //PUT Method
            method: 'put',
            headers: {'Content-type': 'application/json'},
            
            //Converts JS value to JSON string - todoId is stored in 'todoIdFromJSFile' in the fetch request
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })

        //Declare data variable - awaits JSON response
        const data = await response.json()
        console.log(data)

        ////Method - reload the current URL (refresh)
        location.reload()

    //Catch error
    }catch(err){
        console.log(err)
    }
}