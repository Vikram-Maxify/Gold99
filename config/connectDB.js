const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "195.35.22.205",
  user: "99gold",
  password: "E2WKzWZ@%^",
  database: "99gold",
});

export default connection;
