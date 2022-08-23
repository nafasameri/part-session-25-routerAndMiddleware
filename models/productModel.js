const products = require('../data/products.json');

function findAll(req, res) {
    return new Promise((resolve, reject) => {
        resolve(products);
    });
}

function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id);
        resolve(product);
    });
}

function add(data) {
    return new Promise((resolve, reject) => {
        products.push(data);
        resolve(data?.id);
    });
}

module.exports = {
    findAll,
    findById,
    add
}