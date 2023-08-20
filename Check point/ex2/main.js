/* Câu 2: Nhập vào một số tự nhiên n, in ra màn hình tam giác cân rỗng 
có chiều cao là n được tạo thành từ những dấu * 
(có sử dụng vòng lặp.)  */
/*      *
       * *
      *   *
     *     *
    ********* */

//Tư duy: chiều cao h thì đáy có 2*h-1 *
// Các cạnh bên có h *
// Nên in * theo height: ví dụ ở line 1
//test
/* for(var i=1; i<5; i++){
    console.log(i)
};
for(var j = 10; j<15; j++){
    console.log(j)
}
 */
// khi hai vòng for đặt nối tiếp thì chạy hêt vòng này mới đến vòng kia

// CODE here
var h = prompt("Enter triangle's height here")
let draw = "";
function drawTriangle(h){
    for(var i =1; i<=h; i++){
        for(var j =1; j<=h-i; j++){
            draw += " ";           
        }
        for(var j=1; j<=2*i-1;j++){
            if(i==1||i==h||j==1||j==2*i-1){
            draw += "*";            
            }
            else{
            draw += " ";           
            }    
        }
        draw += '\n';
    }
    return draw
}


console.log(drawTriangle(h))
