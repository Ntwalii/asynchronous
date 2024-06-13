fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>{
    console.log("Fetched successfully",response)
    return response.json()
})
.then(data=>{
    console.log("Fetched article title: ",data.title)
})
.catch(err=>{
    console.log("Error nigga")
})