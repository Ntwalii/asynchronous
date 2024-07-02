async function exercise(urls) {
  try {
    let responses = await Promise.all(urls.map((url) => fetch(url)));

    let data = await Promise.all(responses.map((response,index) => {
      if(!response.ok){
        throw new Error(`Fetch failingggg on url ${index+1}`)
      }
      else{
        return response.json()
      }
    }));
    data.forEach((dat) => {
      console.log(dat);
    });
  } catch (error) {
    console.log(error);
  }
}

exercise([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/1",
]);
