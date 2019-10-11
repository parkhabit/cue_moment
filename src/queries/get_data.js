const databaseConnection = require('../database/db_connections.js')

const get_data = (cb) => {
  databaseConnection.query(
    `SELECT email from emails`, (err, res) => {
      if (err) {
        cb(err);
      } else {
        cb(null, res);
      }
    });
  };

module.exports = get_data;