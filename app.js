// Using http module to create server

// const http = require("http");
// const { readFileSync } = require("fs");
// const html = readFileSync("./html/index.html");
// const css = readFileSync("./css/style.css");
// const js = readFileSync("./js/script.js");
// const image = readFileSync("./images/");
// const first = readFileSync("./html/1001.html");

// server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(html);
//   } else if (req.url == "/css/style.css") {
//     res.writeHead(200, { "content-type": "text/css" });
//     res.end(css);
//   } else if (req.url == "/js/script.js") {
//     res.writeHead(200, { "content-type": "text/js" });
//     res.end(js);
//   } else if (req.url == "/1001.html") {
//     res.writeHead(200, { "content-type": "text/html" });
//     res.end(first);
//   } else {
//     res.writeHead(404, { "content-type": "text/plain" });
//     res.end("Page not found");
//   }
// });

// server.listen(5000);

// Using express to create server

const express = require("express");
const path = require("path");
const app = express(); // invoking
// const html = path.resolve(__dirname, "./html/index.html");

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "./public")));
// app.use(express.static("./public"));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public/html/index.html"));
});

app.post("/search", (req, res) => {
  res.send("hello");
  console.log(req.body);
});

// app.all("*", (req, res) => {
//   res.status(404).send("Resource not found");
// });

// app.listen(3000, () => {
//   console.log("listening");
// });
