function Do(){
    const city_name = document.getElementById("myText").value
    const api_url = 'https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid=604fb4e43e4da2331579592de57bc78a';
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => document.querySelector('h2').innerText = "Weather of "+city_name+": " + data.weather[0].main);
}