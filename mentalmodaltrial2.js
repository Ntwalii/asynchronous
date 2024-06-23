// Write a javascript function that displays a number
//  every two seconds and stops displaying after 5 seconds

const answer=()=>{
    let count=0;
    let interval=setInterval(()=>{
        console.log(2);
            },2000)
            
            setTimeout(()=>{
                clearInterval(interval)
            },5000)
}

answer();