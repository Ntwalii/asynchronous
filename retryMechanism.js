const retryMechanism = async (url, retries, count = 0) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error in fetching");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // console.log(error)
    if (count < retries) {
      count++;
      console.log("Retrying again");
      setTimeout(() => {
        retryMechanism(url, retries, count);
      }, count * 1000);
    }
  }
};
retryMechanism("https://jsonplaceholder.typicode.com/tdos/1", 3);
