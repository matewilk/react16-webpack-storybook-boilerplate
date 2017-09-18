
const express = require('express');
const router = express.Router();
const login = require('./modules/login');

router.post('/', login.post);

router.delete('/', login.delete);

module.exports = router;
