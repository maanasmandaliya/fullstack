const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";

  body.setAttribute("data-theme", isDark ? "light" : "dark");
  toggleBtn.textContent = isDark ? "🌙 Dark Mode" : "🌞 Light Mode";
});
