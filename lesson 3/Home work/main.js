/*  
Giải thích code
    *
   ***
  *****
 *******
********* 
chiều cao là h; dòng 1 j cách và i sao
i bắt đầu từ j
j=h-i
code vòng lặp vòng nhau 
line 1: vòng lặp In ra h-i dấu cách sau đó vòng lặp tiếp theo in ra i sao sau đó xuống dòng \n xuống dòng
*/


function drawTriangle(h){
    let draw = "";
    for(var i =1; i<=h; i++){
        for( var j=1; j<=h-i; j++){
            draw += " ";
        }
        for(var j=1; j<=2*i-1; j++){
            draw += "*";
        }
        draw += '\n\n';
    }
    return draw
}
console.log(drawTriangle(5))
    
// Bài 2
var myArr = [9,7,9,0,7,8,387,123,456]
var myNewArr=[]
for(var i =0; i<myArr.length; i++){
    if(myArr[i]%2==0){
        myNewArr.push(myArr[i])
    }
}
console.log(myNewArr)
console.log(myArr)

// Bài 3
let myAns = []
let questionStore =[{
    'question': "Do u like cat?",
    'answer':''

},
{
    'question': "Do u like dog?",
    'answer':''

},
{
    'question': "Do u like rabbit?",
    'answer':''

},
{
    'question': "Do u like bird?",
    'answer':''

},
{
    'question': "Do u like fish?",
    'answer':''

},

] 


for(var i = 0; i<questionStore.length;i++){
    myAns.push(prompt(questionStore[i].question))
}
console.log(myAns)
