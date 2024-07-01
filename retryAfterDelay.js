async function fetchWithoutDelay(trials) {
  if (trials <= 0) {
    return "Limit reached";
  }
  try {
    trials--;
    const controller = new AbortController();
    const { signal } = controller;

    const timer = setTimeout(() => {
      controller.abort();
    }, 20);

    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      signal,
    });
    clearTimeout(timer);
    if (!data.ok) {
      throw new Error(`Failed to fetch data`);
    }
    const response = await data.json();
    console.log(response);
  } catch (error) {
    if (error.name === "AbortError") {
      console.log(`Fetching timed out, Retrying...`);
      fetchWithoutDelay(trials);
    } else {
      console.log(error);
    }
  }
}
fetchWithoutDelay(3);
