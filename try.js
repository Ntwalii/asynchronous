let promise=new Promise((resolve,reject)=>{
    resolve("Hello")
})
    let x=2
    promise
    .then(data=>{
        console.log(data)
    })
    .catch(
        data=>console.log(data)
    )
    
