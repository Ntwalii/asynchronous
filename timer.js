function exercise(url){
    let count=0;
    let timer=setInterval(async ()=>{
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
    count++
    if(count===2){
        clearInterval(timer)
    }
    }
    ,5000)
}

exercise("https://jsonplaceholder.typicode.com/comments/4")
