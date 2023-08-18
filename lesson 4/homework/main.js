
localStorage.setItem("user1",'Phuoc');
localStorage.setItem("user2","Nga");
localStorage.setItem("user3",'Phước');

//require 1
for (var i = 0; i < localStorage.length; i++) {
    var value = localStorage.getItem(localStorage.key(i));
    if (value === 'Phước'){
        localStorage.setItem(localStorage.key(i),'Hà')
        console.log(localStorage.key(i))
    };
    
} 

//require 2: Xóa người
for (var j = 0; j < localStorage.length; j++) {
    var value = localStorage.getItem(localStorage.key(j));
    if (value === 'Phước'){
        localStorage.removeItem(localStorage.key(j))
        console.log(localStorage.key(j))
    };
    
} 
//require 3
/* xóa toàn bộ dữ liệu
 */localStorage.clear()



//Ex 2

var myLyric = ['My whole world change','from the moment','I met you','From the moment','I heard your name']
var i=0
function showLyric(){
    
        console.log(myLyric[i])
        i++
        if(i>=myLyric.length){
            clearInterval(obj);
        }
        
    
    
}
var obj = setInterval(showLyric,1000)


