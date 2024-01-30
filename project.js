const apikey = "9167c8a1a8f821ec076204a99086fb07";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search_box input");
const searchbox_btn = document.querySelector(".search_box button");
const weatherIcon = document.querySelector(".weather_icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if(response.status  == 404){
    document.querySelector(".error").style.display="block";
    document.querySelector(".weather").style.display="None";
  }
else{
    var data = await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed + "Km/h ";
  
    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/cloudy.png";
    }
  
    else if(data.weather[0].main == "Rain")
    {
      weatherIcon.src = "images/rain.png";
    }
  
    else if(data.weather[0].main == "Drizzle")
    {
      weatherIcon.src = "images/drizzle.png";
    }
  
    else if(data.weather[0].main == "Clear")
    {
      weatherIcon.src = "images/sun.png";
    }
  
    else if(data.weather[0].main == "Mist")
    {
      weatherIcon.src = "images/fog.png";
    }
  
    else if(data.weather[0].main == "Storm")
    {
      weatherIcon.src = "images/strom(1).png";
    }
  
    else if(data.weather[0].main == "Thunder")
    {
      weatherIcon.src = "images/thunder.png";
    }
  
    else if(data.weather[0].main == "Cold")
    {
      weatherIcon.src = "images/snow.png";
    }
  
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display="none";
    document.querySelector(".search_box").style.marginTop = "-2rem";
  }  
}


searchbox_btn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});