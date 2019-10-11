const databaseConnection = require('../database/db_connections.js')

const register_email = (email, cb) => {
  databaseConnection.query(
    `INSERT INTO emails(email) VALUES ($1)`, [email], (err) => {
      if (err) {
        cb(err);
      } else {
        cb(null, 'signed-up');
      }
    });
  };

module.exports = register_email;
