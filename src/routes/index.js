const express = require('express');
const path = require('path');
const router = express.Router();
const registeremail = require('./registeremail');
const home = require('./home');
const error = require('./error');
const admin = require('./admin');
router.get('/', home.get);
router.post('/registerEmail', registeremail.post);
router.get('/admin', admin.get);

router.use(error.client);
router.use(error.server);

module.exports = router;
