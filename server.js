const express = require("express");
const cors = require("cors");

const books = require("./data/books");
const periods = require("./data/periods");

const app = express();
const port = 8000;

app.use(cors());

app.get("/", (req, res) => {
  console.log("Ja se pokrenio");
  res.status = 200;
  res.send("Hello World!");
});

app.get("/knjige-za-razred", (req, res) => {
  res.data(books[req.query.razred]);
});

app.get("/sve-knjige", (req, res) => {
  res.data(books);
});

app.get("/svi-periodi", (req, res) => {
  res.data(periods);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
