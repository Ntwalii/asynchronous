function risky(callback){
  let error=Math.random()>0.5?new Error("Error faced"):null;
  let result="Success";
  callback(error,result);  
}

risky((error,result)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
    }
})