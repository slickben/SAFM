const express = require('express');
const accCtr = require('../controllar/acc.js')

const router = express.Router();

router.post('/', accCtr.createAccount)