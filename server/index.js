require("dotenv").config();
const express = require("express");
const router = require("./routes.js");
const DbConnect = require("./database.js");

const app = express();

const PORT = process.env.PORT || 3000;

DbConnect();
app.use(express.json());
app.use(router);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
