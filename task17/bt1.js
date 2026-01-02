const body = document.body;
const mode = localStorage.getItem("mode");

if (mode) {
  body.className = mode;
}
function toggleMode() {
  if (body.className === "light-mode") {
    body.className = "dark-mode";
    localStorage.setItem("mode", "dark-mode");
  } else {
    body.className = "light-mode";
    localStorage.setItem("mode", "light-mode");
  }
}
