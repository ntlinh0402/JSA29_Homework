var drinksAPI = 'https://64fc6205605a026163ae6f91.mockapi.io/coffee/listCoffe'
function start(){
    getDrinks(renderDrinks);
}
start();
function getDrinks(callback){
    fetch(drinksAPI)
        .then(function(response){
            return response.json();
        })
        .then(callback);
}
function renderDrinks(drinks){
    var listDrinksBlock = document.querySelector('#list-drinks');
    var htmls= drinks.map(function(drink){
        return `
        <li>
        <h4>Tên: ${drink.name}</h4>
        <h6>Description: ${drink.description}</h6>
        <h5>Giá cả: ${drink.price}</h5>

        </li>
        `;
    });
    listDrinksBlock.innerHTML = htmls.join('')


}