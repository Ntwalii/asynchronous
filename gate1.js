const vehicles = async () => {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
    );
    if (!response.ok) {
      throw new Error("Fetch failing man");
    }
    let data = await response.json();
    data = data.Results.filter(
      (element) => element.Country === "UNITED STATES (USA)"
    );
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
vehicles();
