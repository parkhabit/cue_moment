const bcrypt = require('bcryptjs');
const check_admin_exists = require('../queries/check_admin_exists');
const check_admin_password = require('../queries/check_admin_password');

exports.post = (req, res, next) => {
  const adminDetails = req.body;
  check_admin_exists(adminDetails.email, (err, queryRes) => {
    if (err) {
      next(err);
    } else if (queryRes[0].case === false) {
      req.flash('error_msg', 'You do not have an account. Please register.');
      res.redirect('/admin');
    } else {
        check_admin_password(adminDetails.email, (err, queryRes) => {
        if (err) next(err);
        else {
          const password = queryRes.rows[0].pword;
          bcrypt.compare(adminDetails.password, password, (err, bcryptRes) => {
            if (err) next(err);
            else {
              if (bcryptRes === false) {
                req.flash('error_msg', 'Incorrect Password, please try again');
                res.redirect('/');
              } else if(bcryptRes === true) {
                req.session.Loggedin = true;
                res.redirect('/getalldata')
              }
            }
          })
        }
      })
    }
  })
}
