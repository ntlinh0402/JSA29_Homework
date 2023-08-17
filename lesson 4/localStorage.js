
localStorage.setItem('name', 'Linh');
localStorage.setItem('book', 'Harry Potter');
var book = localStorage.getItem('book')//lấy ra value của key tên book
var myName=localStorage.getItem('name')

document.getElementById('username').innerHTML=myName+' likes '+book
