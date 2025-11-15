function log(msg) {
    const logDiv = document.getElementById("log");
    const t = new Date().toLocaleTimeString();
    logDiv.innerHTML += `[${t}] ${msg}\n`;
    logDiv.scrollTop = logDiv.scrollHeight;
    console.log(`[${t}] ${msg}`);
}

function updateBar(id, width) {
    const bar = document.getElementById("bar-" + id);
    if (bar) bar.style.width = width;
}

log("📡 async-analytics.js downloading...");
setTimeout(() => {
    updateBar("async", "60%");
    log("⚙️ async-analytics.js executing...");
    setTimeout(() => {
        updateBar("async", "100%");
        log("✅ async-analytics.js finished running!");
    }, 1000);
}, 1000);
