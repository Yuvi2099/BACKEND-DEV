const log = require("./app.js");

log.writeLogFile("Initial log data\n");
log.appendLogFile("Appended log data\n");
log.readLogFile();

// Uncomment when needed
// log.deleteLogFile();
