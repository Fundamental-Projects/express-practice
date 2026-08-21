const express = require("express");
const app = express();
const PORT = 3000;

const aboutRouter = require("./routes/About");
const conctactMeRouter = require("./routes/Contact-me");
const notFoundPageRouter = require("./routes/404");

// app.get("/", (req, res) => {
//   res.sendFile("./index.html", { root: __dirname });
// });

app.use("/about", aboutRouter);
app.use("/contact-me", conctactMeRouter);
app.use("/{*splat}", notFoundPageRouter);

app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});
