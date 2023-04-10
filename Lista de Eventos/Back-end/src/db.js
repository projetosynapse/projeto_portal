const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  port: 3306,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((error) => {
  if (error) throw error;
  console.log(`Conectado ao BD: ${process.env.DB_NAME}`);
});

module.exports = connection;
