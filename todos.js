function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}
function displayTodos(todos) {
    //take html element / container
    const todocontainer = document.getElementById('todo-container');
    for (todo of todos) {
        //create html element / Div
        const todoDiv = document.createElement('div');
        //create inner html element of div
        todoDiv.innerHTML = `
        <h4>User id is = ${todo.userId} and id is = ${todo.id}</h4>
        <p>${todo.title}</p>
        `;
        // div taakee container er vitor dhukano
        todocontainer.appendChild(todoDiv);

    }
}