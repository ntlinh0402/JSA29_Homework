/* Ex1: Tính giai thừa của một số nhập vào từ bàn phím
 */
var number = prompt("Nhập vào số cần tính giai thừa:");
var result = 1
for(var i =1; i<=number; i++){
    result*=i;
    
}
alert(`${number} ! = ${result}`)