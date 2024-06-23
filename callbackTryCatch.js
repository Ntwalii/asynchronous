function risky(callback){
    try{
        let result=Math.random()>0.5?new Error("Error"):"Success";
        callback(null,result);
    }
    catch(error){
        callback(error)
    }
}

risky((error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result)
    }
})