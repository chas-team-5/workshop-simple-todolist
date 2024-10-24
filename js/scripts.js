document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submitButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const todos = [];
    let newId = 0;

    submitButton.addEventListener('click', addTask);
    taskInput.addEventListener('keyup', activateSubmitButton);

    function activateSubmitButton() {
      if (taskInput.checkValidity()) {
        submitButton.disabled = false;
      }
      else {
        submitButton.disabled = true;
      }
    }

    function addTask(event) {
        event.preventDefault();
        newId++;

        const newTask = {
          id: newId,
          task: taskInput.value,
          completed: false
        }

        taskInput.value = '';
        activateSubmitButton();

        todos.push(newTask);
        renderList(todos);
    }

    function removeTask(id) {
      todos.forEach(function(li) {
        if (li.id === id)
          
      })
    }

    function renderList(todos) {
      taskList.innerHTML = '';

      todos.forEach(function(item) {
        const li = document.createElement("li");

        li.textContent = item.task;
        taskList.appendChild(li);
      });

      // console.log("LOG TODOS: ", todos)
    }
});
