const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: "195.35.22.205",
  user: "bhtdemo",
  password: "bhtdemo",
  database: "bhtdemo",
});

export default connection;
