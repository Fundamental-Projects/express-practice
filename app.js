// app.js
const express = require("express");
const app = express();
// app.js
const path = require("node:path");

const authorRouter = require("./routes/authorRouter");
const bookRouter = require("./routes/bookRouter");
const indexRouter = require("./routes/indexRouter");

const PORT = 3000;

function errorHandler(err, req, res, next) {
  console.error(err);

  res.status(err.statusCode || 500).send(err.message);
}

// app.js
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
// app.use("/", indexRouter);

// app.js
const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});

app.get("/about", (req, res) => {
  res.render("about", { links: links });
});

app.use(errorHandler);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
