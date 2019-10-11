 const env = require('env2');
const fs = require('fs');

env('./local.env');

const dbConn = require('./db_connections.js');

const sql = fs.readFileSync(`${__dirname}/db_build.sql`).toString();

dbConn
.query(sql, (error, result) =>
  (error
    ? console.log('Error', error)
    : console.log('Result', result)));