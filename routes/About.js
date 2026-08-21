const express = require("express");
const path = require("node:path");

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "about.html"));
});

module.exports = router;
