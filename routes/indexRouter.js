const { Router } = require("express");

const indexRouter = Router();

function getIndex(req, res) {
  res.send("This is Index");
}

indexRouter.get("/", getIndex);

module.exports = indexRouter;
