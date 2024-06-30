    const retry = async (url, count) => {
    try{
    const response = await fetch(url);
    if (!response) throw new Error("retrying");
    const data = await response.json();
    console.log(data);
    }
    catch(error){
        count--;
        if(count>0){
        console.log("Trying");
        retry('https://jsonplaceholder.typicode.om/todos',count);
        }
        else{
            console.log("Done retrying")
        }

    }
    };

    retry("https://jsonplaceholder.typicode.om/todos", 5);
