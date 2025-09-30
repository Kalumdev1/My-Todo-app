// === LOGIN ===
function login() {
  const fullname = document.getElementById("fullname").value.trim();
  if (fullname) {
    localStorage.setItem("fullname", fullname);
    window.location.href = "todo.html";
  } else { alert("Veuillez entrer votre nom complet !"); }
}

// === AFFICHAGE NOM + CHECK LOGIN ===
let filter = 'all';
window.onload = function () {
  if (document.body.contains(document.getElementById("welcome"))) {
    const fullname = localStorage.getItem("fullname");
    if (!fullname) { window.location.href = "index.html"; return; }
    document.getElementById("welcome").innerText = "Bienvenue, " + fullname + " 👋";
    loadTasks();
  }

  // Charger thème
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("dark");
    updateThemeIcon();
  }
};

// === DÉCONNEXION ===
function logout() {
  localStorage.removeItem("fullname");
  window.location.href = "index.html";
}

// === TODO ===
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (!taskText) return;
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push({ text: taskText, completed: false });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let filteredTasks = tasks;
  if (filter === 'active') filteredTasks = tasks.filter(t => !t.completed);
  if (filter === 'completed') filteredTasks = tasks.filter(t => t.completed);

  filteredTasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.textContent = task.text;
    if (task.completed) li.classList.add("completed");
    li.style.setProperty('--rotate', (Math.random() * 6 - 3) + 'deg');
    li.onclick = function () { toggleTask(index); };
    let delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = function (e) { e.stopPropagation(); deleteTask(index); };
    li.appendChild(delBtn);

    // Swipe mobile
    addSwipeListeners(li, index);

    taskList.appendChild(li);
  });
}

function toggleTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks[index].completed = !tasks[index].completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  const li = taskList.children[index];
  li.classList.add("removing");
  setTimeout(() => { tasks.splice(index, 1); localStorage.setItem("tasks", JSON.stringify(tasks)); loadTasks(); }, 300);
}

function clearCompleted() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const completedCount = tasks.filter(t => t.completed).length;
  if (completedCount === 0) return;
  if (confirm(`Voulez-vous vraiment supprimer ${completedCount} tâche(s) terminée(s) ?`)) {
    tasks = tasks.filter(task => !task.completed);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTasks();
  }
}

// === FILTRE ===
function setFilter(f) {
  filter = f;
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelector(`.filter-btn[onclick="setFilter('${f}')"]`).classList.add("active");
  const taskList = document.getElementById("taskList");
  taskList.style.opacity = 0;
  setTimeout(() => { loadTasks(); taskList.style.opacity = 1; }, 200);
}

// === MODE SOMBRE ===
function toggleTheme() {
  document.body.classList.toggle("dark");
  localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  updateThemeIcon();
}
function updateThemeIcon() {
  const btn = document.querySelector(".theme-toggle");
  btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}

// === Raccourcis clavier ===
document.addEventListener("keydown", function(e) {
  const taskInput = document.getElementById("taskInput");
  if (e.key === "Enter" && taskInput === document.activeElement) addTask();
  if (e.key === "Delete" && taskInput === document.activeElement) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if (tasks.length > 0) deleteTask(tasks.length - 1);
  }
});

// === Swipe mobile ===
let touchStartX = 0, touchEndX = 0;
function handleGesture(li, index) {
  if (touchEndX < touchStartX - 50) deleteTask(index);
  if (touchEndX > touchStartX + 50) toggleTask(index);
}
function addSwipeListeners(li, index) {
  li.addEventListener("touchstart", (e) => { touchStartX = e.changedTouches[0].screenX; });
  li.addEventListener("touchend", (e) => { touchEndX = e.changedTouches[0].screenX; handleGesture(li, index); });
}
