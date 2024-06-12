function getToDo(callback){const request=new XMLHttpRequest();

request.addEventListener('readystatechange',()=>{
    if(request.readyState===4&&request.status===200){
        callback(undefined,JSON.parse(request.responseText))
    }
    else if(request.readyState===4){
        callback("Done but uhhhh",undefined)
    }
})

request.open('GET','chartine.json');
request.send();
}

console.log(1);
console.log(2);
getToDo((err,done)=>err?console.log(err):console.log(done));
console.log(3);
console.log(4);