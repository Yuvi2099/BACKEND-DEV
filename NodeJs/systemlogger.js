const os = require("os");
const fs = require("fs");

setInterval(() => {
  const info = {
    cpu: os.cpus()[0].model,
    memory: os.totalmem(),
    platform: os.platform(),
    time: new Date().toISOString()
  };
  fs.appendFile("system.log", JSON.stringify(info) + "\n", () => {});
}, 5000);
