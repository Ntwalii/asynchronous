const fetchUserTodos=async (urls)=>{
    try{
    const request=await Promise.all(urls.map(url=>fetch(url)))
    const response=await Promise.all(request.map(req=>req.json()))
    console.log(response)
    const users=response[0]
    const todos=response[1]
    console.log(users)
    console.log(todos)
    users.forEach(user=>{
        todos.forEach(todo=>{
           if("todos" in user&&user.id===todo.userId){
             user["todos"].push(todo)  
           } 
           else if(user.id===todo.userId){
               user["todos"]=[todo]
           }
        })
        
    })
    console.log(users)
    }
    catch(err){
        console.log(err)
    }
}
fetchUserTodos(['https://jsonplaceholder.typicode.com/users','https://jsonplaceholder.typicode.com/todos'])