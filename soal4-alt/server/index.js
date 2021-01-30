import Express from "express";
import Cors from "cors";

import Sql from "./database.js";

const sql = Sql();

const app = Express();
const port = 3001;

app.use(Cors());
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  sql.getAll("school_tb", (result) => {
    res.send(result);
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
          id: result[0].id,
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

app.post("/school", (req, res) => {
  const { userId, name, npsn, address, level } = req.body;
  console.log({ name, npsn, address, level, userId });
  sql.insertSchool(
    [parseInt(npsn), name, address, "logo.png", level, userId],
    (result) => {
      if (result.affectedRows > 0) {
        res.send({ status: 200 });
      } else {
        res.send({ status: 500 });
      }
    }
  );
});

app.delete("/school/:id", (req, res) => {
  sql.deleteData("school_tb", req.params.id, (result) => {
    if (result.affectedRows > 0) {
      res.send({ status: 200 });
    } else {
      res.send({ status: 500 });
    }
  });
});
app.listen(port, () => {
  console.log(`running on port ${port}`);
});
