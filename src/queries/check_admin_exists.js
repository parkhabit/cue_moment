const databaseConnection = require('../database/db_connections.js')

const check_admin_exists = (email, cb) => {
  databaseConnection.query(
    `SELECT CASE WHEN EXISTS(SELECT email FROM admins WHERE email = $1) THEN CAST (true AS BOOLEAN) ELSE CAST (false as BOOLEAN) END`, [email], (err, res) => {
      if (err) cb(err);
      else cb(null, res.rows);
    });
  };

module.exports = check_admin_exists;
