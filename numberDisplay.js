const interval=(number)=>{
    let timer=setInterval(()=>{
        console.log(number)
    },2000)
    setTimeout(()=>{
        clearInterval(timer)
    },5000)
}

interval(5)