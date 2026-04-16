function login() {
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (user === "brabu" && pass === "1234") {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("appPage").style.display = "block";
  } else {
    document.getElementById("error").innerText = "Wrong login!";
  }
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value === "") return;

  let li = document.createElement("li");
  li.innerText = input.value;

  // mark complete
  li.onclick = function () {
    li.classList.toggle("completed");
  };

  document.getElementById("list").appendChild(li);

  input.value = "";
}