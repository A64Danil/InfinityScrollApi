'use strict';

const { Company } = require('../../models/Companys/Company');

async function getCompanys(req, res) {
    console.log('get companys')
    const query = req.query;
    if(query.name) {
        const Company = await getCompanyByName(req, res)
        return Company
    }

    const isFullSchema = query.isFullSchema || false;

    // ?page=1&limit=10
    const page = query.page;
    const limit = query.limit;

    // TODO: переделать на Company.getInRange
    // if(page) {
    //     console.log('you are in IF-page statement')
    //     const data = await Company.getByPage(page, limit, isFullSchema);
    //     return data;
    // }

    const start = parseInt(query.start);
    const end = parseInt(query.end);
    if(start >= 0) {
        console.log('you are in IF-start statement')
        // TODO: доделать проверки чтобы выдача была не более 500
        const data = await Company.getInRange(start, end, isFullSchema);
        return data;
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