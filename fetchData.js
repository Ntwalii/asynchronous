async function exercise(urls){
  let requests=await Promise.all(urls.map(url=>fetch(url)))
  console.log(requests)
  let data=await Promise.all(requests.map(request=>request.json()))
  data.forEach(dat=>{
      console.log(dat)
  })
}

exercise(["https://jsonplaceholder.typicode.com/todos","https://jsonplaceholder.typicode.com/todos","https://jsonplaceholder.typicode.com/todos"])