// routes/authorRouter.js
const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

function getAuthor(req, res) {
  res.send("All authors");
}

function getAuthorId(req, res) {
  const { authorId } = req.params;
  res.send(`Author ID: ${authorId}`);
}

authorRouter.get("/", getAuthor);
authorRouter.get("/:authorId", getAuthorById);

module.exports = authorRouter;
