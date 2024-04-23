'use strict';

const { Company } = require('../../models/Companys/Company');

async function getCompanys(req, res) {
    console.log('get companys')
    const query = req.query;
    if(query.name) {
        const Company = await getCompanyByName(req, res)
        return Company
    }

    const data = await Company.findAll();
    return data;
}

async function getCompanyById(req, res) {
    const id = req.params.id;

    const data = await Company.getById(id);
    return data;
}

async function createCompany(req, res) {
    const body = req.body;
    const userWithEmail = await getCompanyByParam('email', body.email);
    if(userWithEmail) return "Companys with this email already exists"

    const newCompany = new Company(body);
    const data = await newCompany.save();
    return data;
}

async function updateCompanyById(req, res) {
    const id = req.params.id;
    let Company = await Company.getById(id);
    if (!Company) return null

    const body = req.body;
    for(let key in body) {
        if(Company[key] !== body[key]) {
            // TODO: перезаписывать только отличающиеся поля
            console.log("Поле " + key + " отличается")
        }
    }
    // TODO: update only existing fields - проверить что будет если оригинальный юзер будет иметь те поля, которых нет в боди
    Company = Object.assign(Company, req.body)
    console.log('company after update', Company)
    const data = await Company.save();
    console.log('RETURNED DATA (updateCompanyById)')
    console.log(data)
    return data;
}

async function deleteCompanyById(req, res) {
    const id = req.params.id;
    let Company = await Company.getById(id);
    if (!Company) return null

    const data = await Company.delete();
    return true
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
    // loginCompany: loginCompany,
    getCompanys,
    getCompanyByName,
    getCompanyById,
    createCompany,
    deleteCompanyById,
    updateCompanyById,
};