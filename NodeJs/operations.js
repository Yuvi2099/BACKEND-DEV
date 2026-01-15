const fs = require("fs");

fs.readFile("input.txt", "utf-8", (err, data) => {
  if (err) throw err;
  const wordCount = data.trim().split(/\s+/).length;
  fs.writeFile("output.txt", wordCount.toString(), err => {
    if (err) throw err;
  });
});
