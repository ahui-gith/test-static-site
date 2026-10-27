// ===== 计数器 =====
const countEl = document.getElementById("count");
let count = 0;

document.getElementById("plusBtn").addEventListener("click", () => {
  count += 1;
  countEl.textContent = count;
});

document.getElementById("minusBtn").addEventListener("click", () => {
  count -= 1;
  countEl.textContent = count;
});

// ===== 主题切换（记忆到 localStorage）=====
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeBtn.textContent = "切换主题 ☀️";
}

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  themeBtn.textContent = isDark ? "切换主题 ☀️" : "切换主题 🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
