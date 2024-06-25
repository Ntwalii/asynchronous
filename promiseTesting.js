// const GITHUB_API="https://api.github.com/users/ntwalii?";
// fetch(GITHUB_API)
// .then(data=>
//     data.json())
// .then((data)=>console.log(data))

async function processPromises() {
    const promise1 = new Promise((resolve) => {
        setTimeout(() => {
            resolve('First promise resolved');
        }, 10000); // Resolves after 10 seconds
        });
        const promise2 = new Promise((resolve) => {
            setTimeout(() => {
                resolve('Second promise resolved');
            }, 5000); // Resolves after 5 seconds
        });
        // Await the first promise
        const result1 = await promise1;
        console.log(result1); 
        
        // Logs after 10 seconds



    // Await the second promise
    const result2 = await promise2;
    console.log(result2); // Logs after 5 more seconds
}

processPromises();
