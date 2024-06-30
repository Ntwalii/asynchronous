// async function fetchData(countryName) {
//   let latitude;
//   let longitude, capital;
//   try {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${countryName}`
//     );
//     const countryData = await response.json();
//     let data = countryData[0];
//     latitude = data.latlng[0];
//     longitude = data.latlng[1];
//     capital = data.capital[0];
//     console.log(`Country: ${countryName}`);
//     console.log(`Capital: ${capital}`);
//     let weatherDetails = await fetch(
//       `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
//     );
//     let weather = await weatherDetails.json();
//     let temperature = weather.current_weather["temperature"];
//     console.log(`Current Temperature: ${temperature}°C`);
//   } catch (error) {
//     console.log(error + "Helllo");
//   }
// }

// fetchData("DRC");


const weatherAPI=async(country)=>{
    try{
    const request=await fetch(`https://restcountries.com/v3.1/name/${country}`)
    
    const countryDetails=await request.json()
    
    const updatedCountryDetails=countryDetails[0]
    const capital=updatedCountryDetails.capital[0]
    
    const latitude=updatedCountryDetails.latlng[0]
    const longitude=updatedCountryDetails.latlng[1]
    
    const weatherFetch=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
    const weatherDetails=await weatherFetch.json()
    
    const temperature=weatherDetails.current_weather.temperature;
    
    console.log(`Country : ${country}`)
    console.log(`Capital : ${capital}`)
    console.log(`Current Temperature : ${temperature}C`)
    }
    catch(error){
        console.log(`Error faced: ${error}`)
    }
}

weatherAPI('sudan')