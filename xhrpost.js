const postData=async(username,email,password,url)=>{
    try{

        let request=new XMLHttpRequest()
        request.addEventListener('readystatechange',async ()=>{
            if(request.readyState===4){
               console.log(request.responseText)
            }
            else if(request.status===200){
                throw new Error("Aubin is a beast")
            }
        })
        request.open('POST',url);
        request.setRequestHeader('Content-Type','application/json');
        const data={
            username,
            email,
            password
        }
        request.send(JSON.stringify(data))
        console.log(request.status)
    }
    catch(error){
        console.log(error)
    }
}
postData("Ntwalii","user@gmail.com","password",'https://jsonplaceholder.typicode.com/posts')