const databaseConnection = require('../database/db_connections.js')

const check_admin_password = (email, cb) => {
  databaseConnection.query(
    `SELECT pword FROM admins WHERE email=$1`, [email], (err, res) => {
      if (err) cb(err);
      else cb(null, res);
    });
  };


module.exports = check_admin_password;
