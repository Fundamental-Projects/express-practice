const express = require("express");
const router = express.Router();

router.get("/contact-me", (req, res) => {
  res.sendFile("./contact-me.html", { root: __dirname });
});

module.exports = router;
