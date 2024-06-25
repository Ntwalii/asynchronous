function createAlarm(name,delay){
    return new Promise((resolve,reject)=>{
        if (delay<2){
            reject("Delay is not sufficient")
        }
        setTimeout(()=>{
            resolve(`Wake up ${name}`)
        },delay*1000)
    })
}
createAlarm("Ntwali",1)
.then(data=>console.log(data))
.catch(err=>console.log(err))
