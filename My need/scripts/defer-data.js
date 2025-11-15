document.addEventListener("DOMContentLoaded", () => {
    const logDiv = document.getElementById("log");
    const t = new Date().toLocaleTimeString();
    logDiv.innerHTML += `[${t}] 📊 defer-data.js fetching data...\n`;
    logDiv.scrollTop = logDiv.scrollHeight;

    setTimeout(() => {
        document.getElementById("bar-defer").style.width = "100%";
        logDiv.innerHTML += `[${new Date().toLocaleTimeString()}] ✅ defer-data.js finished rendering!\n`;
        logDiv.scrollTop = logDiv.scrollHeight;
    }, 2000);
});
