const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Server running on port 5000");
});

module.exports = router;
