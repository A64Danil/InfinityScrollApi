'use strict';

function index(req, res) {
    res.sendFile('index.html', { root: './public/views' });
}

function contacts(req, res) {
    res.sendFile('contacts.html', { root: './public/views' });
}

module.exports = {
    index,
    contacts
};