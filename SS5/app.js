let products = {
    data: [
        {   
            id:1,
            name: "MATRIX 1999 DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/matrix-1999-1.jpg"
        },

        {
            id:2,
            name: "RAEDA DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Raeda-Deck.jpg"
        },

        {
            id:3,
            name: "MUSTY DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Musty-Deck.jpg"
        },

        {
            id:4,
            name: "TRISTIQUE DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Tristique-deck.jpg"
        },

        {
            id:5,
            name: "FIELD TRIP DECK",
            price: "780.000đ - 1.470.000đ",
            image: "images/Fied-Trip-deck.jpg"
        },

        {
            id:6,
            name: "TARO RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-5.jpg"
        },

        {
            id:7,
            name: "NEON RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-1.jpg"
        },

        {
            id:8,
            name: "ORANAGE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-2.jpg"
        },

        {
            id:9,
            name: "BLUE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-3.jpg"
        },

        {
            id:10,
            name: "WHITE RAINBOW LOGO DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/web-4.jpg"
        },

        {
            id:11,
            name: "CUTIS MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cutis.jpg"
        },

        {
            id:12,
            name: "CAM VU MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/cam-vu.jpg"
        },

        {
            id:13,
            name: "SON NGUYEN MODEL DECK",
            price: "780.000đ - 1.670.000đ",
            image: "images/son-nguyen.jpg"
        },
    ]
}

for (let items of products.data) {

    let card = document.createElement("div")
    card.classList.add("card")

    let imgContainer = document.createElement("div")
    imgContainer.classList.add("image-container")

    let image = document.createElement("img")
    image.setAttribute("src", items.image)
    imgContainer.appendChild(image)
    card.appendChild(imgContainer)

    let container = document.createElement("div")
    container.classList.add("container")

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button")
    btn.setAttribute("onclick", "addToCart(" + items.id + ")")
    btn.innerHTML = "Thêm vào giỏ hàng"
    container.appendChild(btn)
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
    
}

function byGetProductById(id){
    for(let items of products.data){
        if(id==items.id){
            return items;
        }
    }
}
var cart = [];
function addToCart(id){
    let storage = localStorage.getItem('cart');
    if(storage){
        cart=JSON.parse(storage)
    }
    let product = byGetProductById(id);
    let itemDetails =cart.find(items=> items.product.id==id)
    if(itemDetails){
        itemDetails.quantity+=1;
    }
    else{
        cart.push({product,quantity:1})
    }
    localStorage.setItem('cart',JSON.stringify(cart))
}
function showAll(){
    console.log("aa")
    var list = `<tr><th>Item</th><th>Value</th><th id="count">Count</th><th>Delete</th><th>Update</th></tr>`
    for(var i=0; i<=localStorage.length - 1; i++){
        console.log()
        if(localStorage.key(i)=="cart"){
            console.log("đúng")
            JSON.parse(localStorage.getItem("cart")).forEach( element => {
                list += `<tr><td>` + element.product.name + `</td><td>`
                    + element.product.price + `</td><td>`
                    + element.quantity
                     + `<td><button onclick="removeItem(` + element.product.id + `)">Xoa<button></tr>`


                

            });
        }
        document.getElementById("list").innerHTML=list;
        

    }
}

function removeItem(id){
    let storage = localStorage.getItem('cart');
    if(storage){
        cart = JSON.parse(storage);
        
    }
    console.log("helo world")
    let cart = cart.filter(item=>item.product.id!=id);
    localStorage.setItem('cart',JSON.stringify('cart')) 

}
/* function clearAll(){
    localStorage.removeItem('cart');
    document.getElementById("list").innerHTML= `<tr><th>Item</th><th>Value</th><th>Count</th></tr>`

    
} */
/* localStorage.getItem("cart") */
function updateItem(id){
    for(let i =0;i<cart.length;i++){
        if(item.product.id == id){
            item.product.quantity = quantity
            showAll()
            return
        }
    }
    /* let storage = localStorage.getItem('cart');
    if(storage){
        cart.JSON.parse(storage);
        let cartItem = '';
        cartItem = cart.filter(item => item.product.id == id);
        cartItem.quantity = document.getElementById('quantity').value;
    } */
}

function clearAll() {
    localStorage.removeItem('cart');
    console.log("hhhajshajsaj")
    document.getElementById('list').innerHTML = 
    `<tr><th>Item</th><th>Value</th><th>Count</th></tr>`;
}