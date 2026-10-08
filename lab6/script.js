function showToday() {
  document.getElementById("main-header").textContent = "Today";
  document.getElementById("main-text").textContent =
    "Here are the tasks you need to complete today.";
}

function showUpcoming() {
  document.getElementById("main-header").textContent = "Upcoming";
  document.getElementById("main-text").textContent =
    "Here are your upcoming tasks.";
}

function showCompleted() {
  document.getElementById("main-header").textContent = "Completed";
  document.getElementById("main-text").textContent =
    "Here are the tasks you have completed.";
}