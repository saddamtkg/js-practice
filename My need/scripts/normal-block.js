const start = Date.now();
while (Date.now() - start < 1000) {} // simulate blocking delay
console.log("⏸ normal-block.js executed (blocking main thread)");
