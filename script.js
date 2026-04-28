let tasks = JSON.parse(localStorage.getItem("tasks") || "[]");
let currentTab = "all";

// LOGIN
function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "brabu" && pass === "1234") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong login!";
  }
}

// SAVE
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ADD TASK
function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  tasks.push({
    text: input.value,
    completed: false
  });

  input.value = "";
  saveTasks();
  loadTasks();
}

// LOAD TASKS
function loadTasks() {
  let list = document.getElementById("list");
  list.innerHTML = "";

  tasks.forEach((task, index) => {

    if (
      currentTab === "completed" && !task.completed ||
      currentTab === "incomplete" && task.completed
    ) return;

    let li = document.createElement("li");
    li.innerText = task.text;

    if (task.completed) li.classList.add("completed");

    li.onclick = () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      loadTasks();
    };

    let btn = document.createElement("button");
    btn.innerText = "X";

    btn.onclick = (e) => {
      e.stopPropagation();
      tasks.splice(index, 1);
      saveTasks();
      loadTasks();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

// TAB SWITCH
function showTab(tab) {
  currentTab = tab;
  loadTasks();
}

// DARK MODE
function toggleMode() {
  document.body.classList.toggle("dark");

  let btn = document.getElementById("modeBtn");

  if (document.body.classList.contains("dark")) {
    btn.innerText = "☀️ Light Mode";
  } else {
    btn.innerText = "🌙 Dark Mode";
  }
}