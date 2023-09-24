var startBtn = document.getElementById('startBtn')
console.log(startBtn)

var covidApi = 'https://api.apify.com/v2/key-value-stores/ZsOpZgeg7dFS1rgfM/records/LATEST';
startBtn.onclick = start
function start(){
    getCities(function(cities){
        console.log(cities.detail)
    })
}
start();
function getCities(callback){
    fetch(covidApi)
        .then(function(response){
            return response.json();
        })
        .then(callback)
};
function renderCities(cities){
    var listCities = document.querySelector("#list-cities");
    var htmls = cities.map(function(city){
        return 
    })
    listCities.innerHTML = htmls.join('')
    
}
