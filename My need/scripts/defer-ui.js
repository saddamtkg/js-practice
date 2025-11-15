document.addEventListener("DOMContentLoaded", () => {
    const logDiv = document.getElementById("log");
    const t = new Date().toLocaleTimeString();
    logDiv.innerHTML += `[${t}] 🎨 defer-ui.js initialized (DOM ready)\n`;
    logDiv.scrollTop = logDiv.scrollHeight;
    document.getElementById("bar-defer").style.width = "50%";
});
