'use strict';

const companyController = require('../../controllers/companyController');
const express = require('express');

let router = express.Router();

router.use('/companys', companyController);

module.exports = router;