const form = document.getElementById("form")
const input = document.getElementById("input")
const button = document.getElementById("button")
const todo = document.getElementById("todo")
let todoList = [];
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  addTodo()
})
const addTodo=()=>{
    const newList = input.value;
    console.log(newList);
    if(!newList){
        alert("no value")

    };
    todoList.push({
      text:newList
    });
    localStorage.setItem("todos", JSON.stringify(todoList));
    render()
}
const render = ()=>{
  todo.innerHTML = null;
  todoList=JSON.parse(localStorage.getItem("todos")) || [];
  for( var i = 0; i<todoList.length; i++){
    let li =document.createElement("li");
    todo.appendChild(li);
    li.innerHTML = `${todoList[i].text}`
  }

}
