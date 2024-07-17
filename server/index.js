require("dotenv").config();
const express = require("express");
const router = require("./routes.js");
const DbConnect = require("./database.js");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(cookieParser());

const corsOption = {
  origin: ["http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
};

app.use(cors(corsOption));
app.use("/storage", express.static("storage"));

app.use(
  express.json({
    limit: "8mb",
  })
);

const PORT = process.env.PORT || 3000;

DbConnect();

app.use(router);

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.listen(PORT, (req, res) => {
  console.log(`Server is listening on port ${PORT}`);
});
