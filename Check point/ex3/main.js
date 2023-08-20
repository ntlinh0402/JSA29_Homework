let users =[];
for (var i = 0; i < localStorage.length; i++) {
    var value = localStorage.getItem("users");
    users.push(value)
    document.getElementById("info").innerHTML = users
    
} 
