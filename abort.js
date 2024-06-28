// 1. Write a function that takes a URL and fetches data from that URL but aborts when the request takes more than 10ms

const fetcher=async (url)=>{
    try{
    const controller=new AbortController()
    setTimeout
    const signal=controller.signal
    setTimeout(()=>{
        controller.abort();
    },100)
    const request=await fetch(url,{signal})
    const data=await request.json();
    console.log(data);
    console.log(`money`)
    setTimeout(()=>{
        controller.abort();
    },1)
    }
    catch(error){
        if(error.name==="AbortError"){
            console.log("Error rejected")
        }
        else{
            console.log("CHacha")
        }
    }
}

fetcher("https://jsonplaceholder.typicode.com/todos/1")

