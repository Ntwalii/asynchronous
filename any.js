const urls = [
  "https://dummyjson.com/posts",
  "https://this-may-not-exist.com/posts",
  "https://jsonplaceholder.typicode.com/posts",
];

const getFastPosts=async(urls)=>{
    try {
     const response=await Promise.any(urls.map(url=>fetch (url)))
     console.log(response)
     if(!response.ok){
        throw new Error('All failed')
     }    
     const data=await response.json();
     console.log(data)
    } catch (error) {
        console.log(error)
    }
}
getFastPosts(urls)