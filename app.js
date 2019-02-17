const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("Hello, guy");
});

app.get("/choco", function(request, response) {
  response.send("<h1>Chocolate</h1>");
});

app.get("/error", function(request, response) {
  response.send("404 notfound");
});

app.all("*", function(request, response) {
  //   response.redirect("/error");
  response.send("asdasd" + request.method);
});

app.listen(3000);

console.log("start localhost:3000");
