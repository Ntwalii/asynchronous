    function getToDo(resource){
        return new Promise((resolve,reject)=>{
            const request=new XMLHttpRequest();

            request.addEventListener('readystatechange',()=>{
            
                if(request.readyState===4&&request.status===200){
                    resolve(JSON.parse(request.responseText))
                }
                else if(request.readyState===4){
                    reject("Done but uhhhh")
                }
            })
            
            request.open('GET',resource);
            request.send();
        })

    }

    getToDo("https://jsonplaceholder.typicode.com/todos/1")
    .then((data)=>{
        console.log(data)
        return getToDo("https://jsonplaceholder.typicode.com/todos/2")
    })
    .then((data)=>{
        console.log(data)
        return getToDo("https://jsonplaceholder.typicode.com/todoos/3")
    })
    .then((data)=>{
        console.log(data)
    })
    .catch((err)=>console.log(err))