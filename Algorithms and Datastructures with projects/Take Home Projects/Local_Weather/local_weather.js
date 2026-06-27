
// Get current weather for any location:  https://weather-proxy.freecodecamp.rocks/api/current?lat=35&lon=139

/*
    Example response: 

    - { "coord": { "lon": 139, "lat": 35 }, "weather": [ { "id": 801, "main": "Clouds", "description": "few clouds", 
    
        "icon": "https://cdn.freecodecamp.org/weather-icons/02n.png" } ], "base": "stations", "main": 
        { "temp": 25, "feels_like": 28.82, "temp_min": 25, "temp_max": 25, "pressure": 1010, "humidity": 84 }, 
        "visibility": 10000, "wind": { "speed": 1.34, "deg": 177, "gust": 2.68 }, "clouds": { "all": 16 }, "dt": 1597922946, ø
        "sys": { "type": 3, "id": 2019346, "country": "JP", "sunrise": 1597867673, "sunset": 1597915636 }, "timezone": 32400, 
        "id": 1851632, "name": "Shuzenji", "cod": 200 }

      Images links are included in the JSON under weather[0].icon. This is enough to complete the challenge.

*/

/*
function success(position)
{
    const getCurrentLocation = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    };

    fetch('/weather', {
        method: 'POST', 
        headers: {'content-type': 'application/json'}, 
        body: JSON.stringify(getCurrentLocation)
    }).then((response) => response.json()).then((data) => console.log(data));

    //getCurrentLocationTemp(getCurrentLocation);
}

function errorCallBack(error)
{
    alert(`ERROR(${error.code}): ${error.message}`);
}

*/

export async function getCurrentLocationTemp(getCurrentLocation)
{
    return await fetch(`https://weather-proxy.freecodecamp.rocks/api/current?lat=${getCurrentLocation.latitude}&lon=${getCurrentLocation.longitude}`)
    .then((response) => response.json())
}

/*

if (navigator.geolocation)
{
    navigator.geolocation.getCurrentPosition(success, errorCallBack);
}

else
{
    throw new Error("Location is not valid");
}

*/



