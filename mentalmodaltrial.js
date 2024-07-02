// Write a function that takes a URL and fetches data from that
//  URL but aborts when the request takes more than 10ms
const timer=(url)=>{
    let controller=new AbortController();
    let {signal}=controller;
    let seeter=setTimeout(()=>{
        
            controller.abort()   
            console.log("Time out")
        
    },1000)
    fetch(url,{signal})
    .then((data)=>{
        clearTimeout(seeter)
        console.log(data)
        })
        .catch((err)=>{
            if(err.name==="AbortError"){
            console.log("Sike")
        }
        console.log("Another")
        })



}

timer('https://jsonplaceholder.typicode.com/todos')
