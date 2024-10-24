document.addEventListener("DOMContentLoaded", function () {
  const submitButton = document.getElementById("submitButton");
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const todos = [];
  let newId = 0;

  submitButton.addEventListener("click", addTask);
  taskInput.addEventListener("keyup", activateSubmitButton);
  taskList.addEventListener("click", eventHandler);

  function activateSubmitButton() {
    if (taskInput.checkValidity()) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  function eventHandler(event) {
    let id = parseInt(event.target.dataset.id);
    switch (event.target.tagName) {
      case "LI":
        toggleCompletion(id);
        break;
      case "A":
        removeTask(id);
        break;
    }
  }

  function removeTask(id) {
    todos.forEach(function (li) {
      if (li.id === id) {
        // REMOVE LI FROM UL
      }
    });
    renderList();
  }

  function toggleCompletion(id) {
    todos.forEach(function (task) {
      if (task.id === id) {
        // TOGGLE COMPLETION
        task.completed = !task.completed;
      }
    });
    renderList();
  }

  function addTask(event) {
    event.preventDefault();
    newId++;

    const newTask = {
      id: newId,
      task: taskInput.value,
      completed: false,
    };

    taskInput.value = "";
    activateSubmitButton();

    todos.push(newTask);
    renderList();

    taskInput.value = "";
  }

  function renderList() {
    taskList.innerHTML = "";

    todos.forEach(function(task) {
      const li = document.createElement("li");

      li.textContent = task.task;
      li.setAttribute("data-id", task.id);

      // PERHAPS USE CSS INSTEAD
      if (task.completed)
        li.style.textDecoration = 'line-through';

      taskList.appendChild(li);
    });
  }
});
