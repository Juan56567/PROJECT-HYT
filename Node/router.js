const express = require("express");
const router = express.Router();
const db = require('./models/dbModels');

router.get("/", (req, res) => {
  db.init();
  res.render("login");
});

router.post("/login", (req, res) => {
  db.create();
  res.send("Se creo el archivo");
});

module.exports = router;
