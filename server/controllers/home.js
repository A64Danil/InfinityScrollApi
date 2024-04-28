'use strict';

function index(request, response) {
    response.sendFile('index.html', { root: './public/' });
}

module.exports = {
    index: index
};