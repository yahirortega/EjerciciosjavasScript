const UrlBase="https://api.openweathermap.org/data/2.5/weather";
const Apikey = "cb0ef8e26307a79ea59615b9f6dfbd8d";
const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat,lon, apikey){
    const url = `${UrlBase}?lat=${lat}&lon=${lon}&appid=${apikey}`;
    const clima = await fetchApi(url);
    console.log(clima)
    document.querySelector('#left h2').innerHTML= clima.name;
    const temperature = Math.round(clima.main.temp - 273.15);
    let emoji= '';
    if(temperature < 10 ){
        emoji = '❄️';
    } else if (temperature < 20){
        emoji = '⛅';
    } else {
        emoji = '🔥';
    }

}

navigator.geolocation.getCurrentPosition(
    possiton => {
        const lat = possiton.coords.latitude;
        const lon = possiton.coords.longitude;
        getClima(lat, lon, Apikey);
    }
)