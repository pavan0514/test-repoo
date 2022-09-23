// inner HTML

const todoList = document.querySelector(".todo-list")
console.log(todoList.innerHTML)
// todoList.innerHTML="<li>new todo</>"
todoList.innerHTML+= "<li>new todo</>"
todoList.innerHTML+= "<li>teach student</>"