function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "brabu" && pass === "1234") {
    document.getElementById("loginPage").classList.add("hidden");
    document.getElementById("appPage").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong username or password!";
  }
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  // complete toggle
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  // delete button
  let btn = document.createElement("button");
  btn.innerText = "X";

  btn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(btn);
  document.getElementById("list").appendChild(li);

  input.value = "";
}