'use strict';

// const registerController = require('../../controllers/apis/register');
// const loginController = require('../../controllers/apis/login');
// const dashboardController = require('../../controllers/apis/dashboard');
const companyController = require('../../controllers/companyController');
const express = require('express');

let router = express.Router();


// router.use('/register', registerController);
router.use('/companys', companyController);
// router.use('/login', loginController);
// router.use('/dashboard', dashboardController);

module.exports = router;