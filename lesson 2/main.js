var hocsinh ={
    name:"Linh",
    age:18
}
for(var key in hocsinh){
    console.log(hocsinh[key])
}


var string = "This is for in function";
for(var i in string){
    console.log(i)
    console.log(string[i])
}

var students = ['Linh','Thùy', 'Ánh'];
for(var value of students){
    console.log(value)
}

var teachers = ['Linh','Thùy', 'Ánh'];
for(var value in teachers){
    console.log(value)
}

for(var i of string){
    console.log(i)
}

var myInfo ={
    name:"Linh",
    age:18
}
for( var att of Object.keys(myInfo)){
    console.log(att)
}