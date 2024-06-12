function getToDo(callback){const request=new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    if(request.readyState===4&&request.status===200){
        callback(undefined,"Done")
    }
    else if(request.readyState===4){
        callback("Done but uhhhh",undefined)
    }
})

request.open('GET','https://jsonplaceholder.typicode.com/todos');
request.send();
}


getToDo((err,done)=>err?console.log(err):console.log(done));