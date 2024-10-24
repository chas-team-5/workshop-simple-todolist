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

        todos.push(newTask);
        renderList(todos);

        taskInput.value = '';
    }

    function renderList(todos) {
      taskList.innerHTML = '';
      
      todos.forEach(function(item) {
        const li = document.createElement("li");

        li.textContent = item.task;
        li.setAttribute('data-id', item.id);
        li.classList.add('list-group-item');

        if (item.completed) {
          li.style.textDecoration = 'line-through';
        }

        li.addEventListener('click', function() {
          toggleCompletion(item.id, li);
        });
        
        function toggleCompletion(id, li) {
          const task = todos.find(task => task.id === id);
          if (task) {
            task.completed = !task.completed;
            li.style.textDecoration = task.completed ? 'line-through' : 'none'; 
          }
        }
        
        taskList.appendChild(li);
      });

      console.log("LOG TODOS: ", todos)
    }   
});
