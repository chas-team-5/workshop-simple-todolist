document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submitButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const todos = [];
    let newId = 0;

    submitButton.addEventListener('click', addTask);

    function addTask(event) {
        event.preventDefault();
        newId++;

        const newTask = {
          id: newId,
          task: taskInput.value,
          completed: false
        }

        todos.push(newTask);
        renderList(todos);
    }

    function renderList(todos) {
      taskList.innerHTML = '';
      
      todos.forEach(function(item) {
        const li = document.createElement("li");

        li.textContent = item.task;
        taskList.appendChild(li);
      });

      console.log("LOG TODOS: ", todos)
    }   
});
