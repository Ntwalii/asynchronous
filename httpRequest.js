// function getToDo(callback){const request=new XMLHttpRequest();

// request.addEventListener('readystatechange',()=>{

//     if(request.readyState===4&&request.status===200){
//         callback(undefined,JSON.parse(request.responseText))
//     }
//     else if(request.readyState===4){
//         callback("Done but uhhhh",undefined)
//     }
// })

// request.open('GET','https://jsonplaceholder.typicode.com/todos');
// request.send();
// }

let getSomething=()=>{
    return new Promise((resolve,reject)=>{
        // resolve("Passed successfully");
        reject("Rejected ahaha");
    })
}

getSomething().then(data=>{
    console.log(data);
},data=>{
    console.error(data)
})