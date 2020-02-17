const express = require('express');
const accCtr = require('../controllar/acc.js')

const router = express.Router();

router.post('/signup', accCtr.createAccount)

module.exports = router