const check_email_exists = require('../queries/check_email_exists');
const register_email = require('../queries/register_email');

exports.post = (req, res, next) => {
    const emailDetails = req.body;
    check_email_exists(emailDetails.email, (err, queryRes) => {
        if(err) {
            next(err);
        } else if(queryRes[0].case === true) {
            req.flash('error_msg', 'You have already signed up to recieve information');
            res.redirect('/');
        } else {
            register_email(emailDetails.email, (err, queryRes) => {
                if (err) {
                    req.flash('error_msg', 'Sorry something went wrong with our server, please try registering your email again');
                    res.redirect('/');
                } else {
                    req.flash('success', 'Your email has been added to our database');
                    res.redirect('/');
                }
            });
        }
    })
}
