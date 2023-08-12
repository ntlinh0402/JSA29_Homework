var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]
 // Output: 8700000



function getTotal(orders) {
    var arrayLength = orders.length 
    var result = 0
     
    for (var i=0; i<=arrayLength; i++) {
        result += orders[i].price;
        }
    return result 
}
console.log(getTotal(orders))  

