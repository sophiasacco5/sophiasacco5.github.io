const taskForm = document.getElementById("task-form");
const taskInput = document.getElementById("task-input");
const categoryInput = document.getElementById("category-input");
const dateInput = document.getElementById("date-input");
const taskList = document.getElementById("task-list");
const mainHeader = document.getElementById("main-header");
const taskCounter = document.getElementById("task-counter");
const sidebarButtons = document.querySelectorAll(".sidebar-button");

let tasks = [];
let currentSection = "today";

taskForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTask = {
    id: Date.now(),
    text: taskInput.value,
    category: categoryInput.value,
    date: dateInput.value,
    completed: false
  };

  tasks.push(newTask);

  taskForm.reset();
  displayTasks();
});

sidebarButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    currentSection = button.dataset.section;

    sidebarButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    button.classList.add("active");
    displayTasks();
  });
});

function displayTasks() {
  taskList.innerHTML = "";

  let filteredTasks = tasks;

  if (currentSection === "today") {
    const today = new Date().toISOString().split("T")[0];

    filteredTasks = tasks.filter(function (task) {
      return task.date === today && !task.completed;
    });

    mainHeader.textContent = "Today";
  }

  if (currentSection === "upcoming") {
    const today = new Date().toISOString().split("T")[0];

    filteredTasks = tasks.filter(function (task) {
      return task.date > today && !task.completed;
    });

    mainHeader.textContent = "Upcoming";
  }

  if (currentSection === "completed") {
    filteredTasks = tasks.filter(function (task) {
      return task.completed;
    });

    mainHeader.textContent = "Completed";
  }

  filteredTasks.forEach(function (task) {
    const taskItem = document.createElement("li");
    taskItem.classList.add("task-item");

    if (task.completed) {
      taskItem.classList.add("completed-task");
    }

    taskItem.innerHTML = `
      <input
        type="checkbox"
        ${task.completed ? "checked" : ""}
        onchange="toggleTask(${task.id})"
      >

      <div class="task-text">
        ${task.text}
        <div class="task-details">
          ${task.category} ${task.date ? "• Due: " + task.date : ""}
        </div>
      </div>

      <button class="edit-button" onclick="editTask(${task.id})">Edit</button>
      <button class="delete-button" onclick="deleteTask(${task.id})">Delete</button>
    `;

    taskList.appendChild(taskItem);
  });

  updateTaskCounter(filteredTasks);
}

function updateTaskCounter(filteredTasks) {
  if (currentSection === "completed") {
    taskCounter.textContent = `${filteredTasks.length} completed task(s).`;
  } else {
    taskCounter.textContent = `${filteredTasks.length} task(s) left.`;
  }
}

function toggleTask(taskId) {
  tasks = tasks.map(function (task) {
    if (task.id === taskId) {
      task.completed = !task.completed;
    }

    return task;
  });

  displayTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter(function (task) {
    return task.id !== taskId;
  });

  displayTasks();
}

function editTask(taskId) {
  const task = tasks.find(function (task) {
    return task.id === taskId;
  });

  const updatedText = prompt("Edit your task:", task.text);

  if (updatedText !== null && updatedText.trim() !== "") {
    task.text = updatedText;
    displayTasks();
  }
}

displayTasks();