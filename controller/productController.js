const Product = require('../models/productModel');

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
        console.log(e);
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
        console.log(error)
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
        console.log(error)
    }
}


module.exports = {
    getProducts,
    createProduct
}