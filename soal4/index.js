import express from "express";
import path from "path";
import Sql from "./database.js";
import Cors from "cors";

const app = express();
const port = 3000;
const __dirname = path.resolve();

const sql = Sql();

app.use(Cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/index.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "/src/login.html"));
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
});
app.get("/all", (req, res) => {
  sql.get("school_tb", (result) => {
    res.send(result);
  });
});
app.listen(port, () => {
  console.log("run port : " + port);
});
