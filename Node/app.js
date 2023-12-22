const express = require("express");
const app = express();
const port = 3000;
const router = require("./router");
const cookieParser = require("cookie-parser");

app.set("view engine", "ejs");
app.use(router);
require("dotenv").config({ path: "./env/.env" });
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(port, () => {
  console.log("http://localhost:3000");
});


