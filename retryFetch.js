    const retry = async (url, count) => {
    try{
    const response = await fetch(url);
    if (!response.ok) throw new Error("retrying");
    const data = await response.json();
    console.log(data);
    }
    catch(error){
        count--;
        if(count>0){
        console.log("Trying");
        retry(url,count);
        }
        else{
            console.log("Done retrying")
        }

    }
    };

    retry("https://jsonplaceholder.typicode.com/todos", 5);
