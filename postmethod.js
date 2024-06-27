const postData=async(username,email,password)=>{
    try{
        let request=await fetch('https://jsonplaceholder.typicode.com/posts',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        if(!request.ok){
            throw new Error("Failed fetching")
        }
        request=await request.json();
        console.log(request)
    }
    catch(error){
        console.log(response)
    }
}
postData("Ntwalii","user@gmail.com","password")