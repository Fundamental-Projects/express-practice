const express = require("express");
const path = require("node:path");

const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "..", "404.html"));
});

module.exports = router;
