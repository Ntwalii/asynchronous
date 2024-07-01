async function fetchUserData() {
    try {
      const controller = new AbortController();
      const { signal } = controller;
  
      const timer = setTimeout(() => {
        controller.abort();
      }, 50);
  
      const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1", {
        signal,
      });
      const promise2 = fetch(
        "https://jsonplaceholder.typicode.com/todos/1",
        { signal }
      );
      const data = await Promise.all([promise1, promise2]);
      const responses =await data.map((el,index) => {
        clearTimeout(timer);
        if (!el.ok) {
          throw new Error(`Failed to fetch data ${index+1}`);
        } else {
          return el.json();
        }
      });
      
      const response = await Promise.all(responses);
      console.log(response);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log(`Fetching timed out`);
      } else {
        console.log(error);
      }
    }
  }

  fetchUserData()