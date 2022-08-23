const Product = require('../models/productModel');
const logger = require('log4js').getLogger();
logger.level = 'debug';

async function getProducts(req, res) {
    try {
        const id = req.params ?.id;
        if (id) await getProduct(req, res, id);
        else {
            let products = await Product.findAll();
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify(products));
        }
    } catch (e) {
        logger.error(e);
    }
}

async function getProduct(req, res, id) {
    try {
        const product = await Product.findById(id)
        if (!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        logger.error(error)
    }
}

async function createProduct(req, res, data) {
    try {
        const productId = await Product.add(data);
        if (!productId) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Could Not Create' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(productId))
        }
    } catch (error) {
        logger.error(error)
    }
}


module.exports = {
    getProducts,
    createProduct
}