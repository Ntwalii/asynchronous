const retry=async (url)=>{
try{
    const request=await fetch(url);
    const response=await request.json();
    console.log(response);
}
catch(error){
    fe
}
}