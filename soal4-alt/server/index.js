import Express from "express";

import Sql from "./database.js";

const sql = Sql();

const app = Express();
const port = 3001;

app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("/");
  sql.getAll("school_tb", (result) => {
    console.log(result);
  });
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  sql.get("user", { key: "email", value: email }, (result) => {
    if (result.length !== 0) {
      if (result[0].password === password) {
        res.send({
          email,
          status: 200,
        });
      } else {
        res.send({
          status: 403,
        });
      }
    } else {
      res.send({
        status: 403,
      });
    }
  });
});
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
