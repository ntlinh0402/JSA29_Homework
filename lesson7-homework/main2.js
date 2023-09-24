var citiesApi='http://localhost:3000/cities'

function start(){
    getCities(renderCities);
}
start();
async function getCities(callback){
    fetch(citiesApi)
        .then(function(response){
            return response.json;
        })
        .then(callback);
        
};
function renderCities(cities){
    var listCities = document.querySelector('#list-cities');
    const htmls = cities.map(function(city){
        return `
        <li>
        <h4>${city.name}</h4>
        </li>
        `;
        
    });
    listCities.innerHTML = htmls.join('')
    console.log(cities.name)
}