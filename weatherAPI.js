async function fetchData(countryName){
    let latitude;
    let longitude,capital;
    try{
    const response=await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
    const countryData=await response.json()
    let data = countryData[0]
    latitude=data.latlng[0];
    longitude=data.latlng[1]; capital=data.capital[0]
    console.log(`Country: ${countryName}`)
    console.log(`Capital: ${capital}`)
    let weatherDetails=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    let weather=await weatherDetails.json()
    let temperature=weather.current_weather["temperature"];
    console.log(`Current Temperature: ${temperature}°C`);
    }
    catch(error){
        console.log(error+"Helllo")
    }
}

fetchData("DRC")