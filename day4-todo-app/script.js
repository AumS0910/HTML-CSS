const todoInput = document.getElementById('todoInput');
const addTodoBtn = document.getElementById('add-todo-btn');
const todoList = document.getElementById('todoList');

addTodoBtn.addEventListener('click', addTodo);

todoInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}