import Mysql from "mysql";

export default function Sql() {
  const db = Mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "dumb_school",
  });

  const getAll = (table, cb) => {
    const query = `SELECT * FROM ${table}`;

    db.query(query, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

  const get = (table, data, cb) => {
    const { key, value } = data;
    const query = `SELECT * FROM ${table} WHERE ${key}=?`;
    db.query(query, value, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };

  return {
    getAll,
    get,
  };
}
