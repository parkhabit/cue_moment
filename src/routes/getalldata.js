const get_data = require('../queries/get_data');

exports.get = (req, res, next) => {
    if(req.session.Loggedin === true) {
        get_data((err, queryRes) => {
            if(err) {
                req.flash('error_msg', err);
                res.redirect('/admin')
            } else {
                res.render('alldata', {allData: queryRes.rows})
            }
        })
    } else {
        res.status(403).render('error', {
            layout: 'error',
            statusCode: 403,
            errorMessage: 'Forbidden path'
        });
    }
}
