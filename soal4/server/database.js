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

  const insertSchool = (data, cb) => {
    const query = `INSERT INTO school_tb (npsn, name_school, address, logo_school, school_level, user_id) VALUES (?,?,?,?,?,?)`;
    db.query(query, data, (err, res) => {
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

  const deleteData = (table, id, cb) => {
    const query = `DELETE FROM ${table} WHERE id=?`;
    db.query(query, id, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };
  const updateData = (schId, data, cb) => {
    const query = `UPDATE school_tb SET name_school=?,npsn=?,address=?,school_level=? WHERE id=${schId}`;
    db.query(query, data, (err, res) => {
      if (err) throw err;
      cb(res);
    });
  };
  return {
    getAll,
    get,
    insertSchool,
    deleteData,
    updateData,
  };
}
