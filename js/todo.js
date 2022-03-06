const todoForm = document.getElementById("todo-form");
const todoInpt = todoForm.querySelector("input");
const todoList = document.getElementById("todoList");

function onHandleTodoSubmit(event){
    event.preventDefault();
    console.log(todoInpt.value);
    const newTodo = todoInpt.value;
    todoInpt.value = "";
    paintTodo(newTodo);
}

function setDeleteTodoItem(event){
    const parentLi = event.target.parentElement;
    parentLi.remove();
}

function paintTodo(newTodo){
    const newTodoLi = document.createElement("li");
    const newTodoSpan = document.createElement("span");
    newTodoSpan.innerText = newTodo;
    
    const newTodobutton = document.createElement("button");
    newTodobutton.innerText = "X";
    newTodobutton.addEventListener("click",setDeleteTodoItem);
    newTodoLi.appendChild(newTodoSpan);  //todo텍스트
    newTodoLi.appendChild(newTodobutton);  //삭제버튼
    todoList.appendChild(newTodoLi);
}

todoForm.addEventListener("submit", onHandleTodoSubmit);
