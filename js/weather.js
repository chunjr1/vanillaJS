const API_KEY = "2b7d23a22b1fb985aa25b99cb74e50a2";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");


function onGeoCheck(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        city.innerText = data.name;
        weather.innerText = ` / ${data.weather[0].main}`;
        console.log(data);
    });
}

function onGeoError()
{
    city.innerText = "";
    //alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoCheck, onGeoError);
