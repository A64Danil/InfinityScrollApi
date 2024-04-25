'use strict';

const { Company } = require('../../models/Companys/Company');

async function getCompanys(req, res) {
    console.log('get companys')
    const query = req.query;
    const isFullSchema = query.isFullSchema || false;
    if(query.name) {
        const Company = await getCompanyByName(req, res)
        return Company
    }

    const data = await Company.findAll(isFullSchema);
    return data;
}

async function getCompanyById(req, res) {
    const id = req.params.id;

    const data = await Company.getById(id);
    return data;
}

async function getCompanyByName(req, res) {
    const query = req.query;
    const data = await Company.findOneByColumn('name', query.name );
    return data
}

async function getCompanyByParam(name, value) {
    const data = await Company.findOneByColumn(name, value);
    return data
}

module.exports = {
    getCompanys,
    getCompanyById
};