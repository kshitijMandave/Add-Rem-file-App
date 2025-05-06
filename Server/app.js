const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const urlpath = req.url;
  if (urlpath === "/create") {
    fs.writeFile("dummy.txt", "", (error) => {
      if (error) {
        res.writeHead(500);
        res.end("Failed to create file");
      } else {
        res.writeHead(200);
        res.end("Created file successfully");
      }
    });
  } else if (urlpath === "/remove") {
    fs.unlink("dummy.txt", (error) => {
      if (error) {
        res.writeHead(500);
        res.end("Failed to remove the file");
      } else {
        res.writeHead(200);
        res.end("Removed file successfully");
      }
    });
  } else {
    res.writeHead(404);
    res.end("Route not found");
  }
});

server.listen(4020, () => {
  console.log("Server started on port 4020");
});
