const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: true });

const foodFullnesses = {
  spaghetti: 2,
  pizza: 2,
  water: 0,
  galicbread: 1,
  caesarsalad: 3
};

let fullnessScore = 0;
const fullness = function() {
  return `
    <div>
        <label>Fullness: </label>${fullnessScore}
    </div>
`;
};

const form = `
    <form action="/feed" method="POST">
        <label for="food">Food: </label>
        <input id="food" name="food"/>
        <button type="submit">Feed</button>
    </form>
`;

app.get("/", function(request, response) {
  response.send("Hello, guy");
});

app.get("/choco", function(request, response) {
  response.send(`<h1>Chocolate</h1> ${fullness()} ${form}`);
});

app.post("/feed", urlencodedParser, function(request, response) {
  const food = request.body.food;

  let foodScore = foodFullnesses[food.toLowerCase()] || 0;
  fullnessScore += foodScore;
  response.redirect("/choco");
});

app.get("/error", function(request, response) {
  response.send("404 notfound");
});

app.all("*", function(request, response) {
  response.redirect("/error");
  // response.send("asdasd" + request.method);
});

app.listen(3000);

console.log("start localhost:3000");
