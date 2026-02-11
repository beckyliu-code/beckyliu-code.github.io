// 年份
document.getElementById("y").textContent = new Date().getFullYear();

// 主題切換：官綠(guanlv) ↔ 景泰藍(jingtai)
const THEMES = ["guanlv", "jingtai"];
const key = "site_theme";

function applyTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  localStorage.setItem(key, t);
}

function initTheme() {
  const saved = localStorage.getItem(key);
  if (saved && THEMES.includes(saved)) {
    applyTheme(saved);
    return;
  }
  applyTheme("guanlv"); // 預設：官綠・蜜蠟
}

initTheme();

const btn = document.getElementById("themeBtn");
btn.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme") || "guanlv";
  const next = current === "guanlv" ? "jingtai" : "guanlv";
  applyTheme(next);
});

