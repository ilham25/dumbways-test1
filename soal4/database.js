import mysql from "mysql";

export default function Sql() {
  const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "dumb_school",
  });

  const get = (table, cb) => {
    const query = `SELECT * FROM ${table}`;
    db.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

  return {
    get,
  };
}
