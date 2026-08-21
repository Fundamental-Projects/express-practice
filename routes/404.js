const express = require("express");
const router = express.Router();

router.get("/{*splat}", (req, res) => {
  res.status(404).sendFile("404.html", { root: __dirname });
});

module.exports = router;
