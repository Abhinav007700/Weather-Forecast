document.getElementById('chennai').onclick=Do;
document.getElementById('mumbai').onclick=Do;
document.getElementById('trichy').onclick=Do;
document.getElementById('paris').onclick=Do;
document.getElementById('london').onclick=Do;
function Do(){
    const city_name = this.id;
    const api_url = 'https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid=604fb4e43e4da2331579592de57bc78a';
    fetch(api_url)
    .then((response) => response.json())
    .then((data) => document.querySelector('h2').innerText = "Weather of "+city_name+": " + data.weather[0].main);
}