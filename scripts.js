const key = "78f2629078328d60fc6d7d56b755c7dd"

function putDataInHtml(dados) {

    console.log(dados);
    document.querySelector(".city-name").innerHTML = "tempo em " + dados.name;

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";

    document.querySelector(".weather-description").innerHTML = dados.weather[0].description;

    document.querySelector(".humidity").innerHTML = "Umidade: " + dados.main.humidity + "%";

    document.querySelector(".img_weather").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function getWeather(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json() );


    putDataInHtml(dados);
}

function clickOnButton() {
    const city = document.querySelector(".city-input").value;

    getWeather(city);   
}