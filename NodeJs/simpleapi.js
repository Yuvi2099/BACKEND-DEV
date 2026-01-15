const http = require("http");

let todos = [];
let id = 1;

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/todos") {
    res.end(JSON.stringify(todos));
  }

  if (req.method === "POST" && req.url === "/todos") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const todo = { id: id++, ...JSON.parse(body) };
      todos.push(todo);
      res.end(JSON.stringify(todo));
    });
  }

  if (req.method === "PUT" && req.url.startsWith("/todos/")) {
    const todoId = parseInt(req.url.split("/")[2]);
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      todos = todos.map(t => t.id === todoId ? { ...t, ...JSON.parse(body) } : t);
      res.end("Updated");
    });
  }

  if (req.method === "DELETE" && req.url.startsWith("/todos/")) {
    const todoId = parseInt(req.url.split("/")[2]);
    todos = todos.filter(t => t.id !== todoId);
    res.end("Deleted");
  }
});

server.listen(3000);
