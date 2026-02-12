(() => {
  const KEY = "lastScrollYBeforeContact";
  const btnChat = document.getElementById("btnChat");
  const backFab = document.getElementById("backFab");

  if (!backFab) return;

  function getStoredY() {
    const raw = sessionStorage.getItem(KEY);
    if (!raw) return null;
    const y = Number(raw);
    return Number.isFinite(y) ? y : null;
  }

  function showOrHideFab() {
    const isAtContact = window.location.hash === "#contact";
    const y = getStoredY();
    const shouldShow = isAtContact && y !== null && y > 0;
    backFab.hidden = !shouldShow;
  }

  // 點「與我們聊聊」前，先記錄當下閱讀位置
  if (btnChat) {
    btnChat.addEventListener("click", () => {
      sessionStorage.setItem(KEY, String(window.scrollY || 0));
      // 跳轉由 href="#contact" 處理
    });
  }

  // 回到剛才位置
  backFab.addEventListener("click", () => {
    const y = getStoredY();
    if (y === null) return;

    window.scrollTo({ top: y, behavior: "smooth" });
    sessionStorage.removeItem(KEY);
    backFab.hidden = true;
  });

  window.addEventListener("hashchange", showOrHideFab);
  window.addEventListener("load", showOrHideFab);
})();
