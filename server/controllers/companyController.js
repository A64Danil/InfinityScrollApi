'use strict';

const express = require('express');
const companyService = require('../services/company/company');

const routerController = require('./router/routerController')

let router = express.Router();
const Router = new routerController(router);

Router.get('/', companyService.getCompanys)
Router.get('/:id', companyService.getCompanyById);

module.exports = router;