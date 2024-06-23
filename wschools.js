function getRequest(resource){

return new Promise((resolve,reject)=>{
    fetch(resource)
    .then(response=>{
        if(!response.ok){
            throw new Error("Error faced")
        }
        return response.json();
    })
    .then(message=>resolve(message))
    .catch(err=>reject(err))    
})
}
let promise=getRequest('https://jsonplaceholder.typicode.com/todos/1')
promise
.then(data=>console.log(data))
.catch(err=>console.log(err))


