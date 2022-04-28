const mysql = require('mysql');
const env = process.env;

const db = mysql.createConnection({
  host: env.DB_HOST || 'localhost',
  user: env.DB_USER || 'root',
  password: env.DB_PW || '',
  database: env.DB_NAME || 'scheduleapp',
});

module.exports = db;