let searchInput = document.getElementById("search-input");
let cityName=document.querySelector(".city-name");
let weatherState =document.querySelector(".weather-state")
let humidity = document.querySelector(".humidity");
let temperature =document.querySelector(".temperature");
let weatherIcon = document.querySelector(".weater-icon");

let defaul = "*****"
searchInput.addEventListener("change",(e)=>{
    console.log("result",e.target.value)
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=9f3b3a2e41e81c8eaf693f6b258be317&lang=vi&units=metric`)
    

    .then(async result =>{
        
        const data = await result.json();
        console.log(data)
        cityName.innerHTML = data.name || defaul;
        weatherState.innerHTML =data.weather[0].description || defaul;
        humidity.innerHTML =data.main.humidity || defaul;
        temperature.innerHTML=Math.round(data.main.temp)|| defaul;
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    })
})
    /*.then(result =>{
        
        const data =result.json();
        return data;
        
    })
})
    .then(function(data){
        cityName.innerHTML = data.name || defaul;
        weatherState.innerHTML =data.weather[0].description || defaul;
        humidity.innerHTML =data.main.humidity || defaul;
        temperature.innerHTML=Math.round(data.main.temp)|| defaul;
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
    }) */