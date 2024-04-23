'use strict';

const express = require('express');
const companyService = require('../services/company/company');

const routerController = require('./router/routerController')


let router = express.Router();
const Router = new routerController(router);

Router.get('/', companyService.getCompanys)
Router.post('/', companyService.createCompany)


Router.get('/:id', companyService.getCompanyById);
Router.put('/:id', companyService.updateCompanyById);
Router.delete('/:id', companyService.deleteCompanyById);


module.exports = router;