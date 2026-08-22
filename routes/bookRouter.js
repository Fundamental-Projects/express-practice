// routes/authorRouter.js
const { Router } = require("express");

const bookRouter = Router();

function getBooks(req, res) {
  res.send("All Books");
}

function getBooksId(req, res) {
  const { bookId } = req.params;
  res.send(`Book ID: ${bookId}`);
}

bookRouter.get("/", getBooks);
bookRouter.get("/:bookId", getBooksId);

module.exports = bookRouter;
