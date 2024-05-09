'use strict';

const { Company } = require('../../models/Companys/Company');

async function getCompanys(req, res) {
    console.log('get companys')
    const query = req.query;
    if(query.name) {
        const Company = await getCompanyByName(req, res)
        return Company
    }

    const totalCount = 17154017;
    res.set('X-Total-Count', totalCount);

    const isFullSchema = query.isFullSchema === "true";

    const page = parseInt(query.page);
    const limit = query.limit < 500 ? parseInt(query.limit) : 500;

    if(page) {
        const start = ((page - 1) * limit) + 1;
        const end = start + (limit - 1);
        const data = await Company.getInRange(start, end, isFullSchema);
        return data;
    }

    const start = parseInt(query.start);
    let end = parseInt(query.end) || start + 99;
    if(start >= 0) {
        if(end - start > 500) {
            end = start + 499;
        }
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