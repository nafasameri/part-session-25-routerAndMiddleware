const http = require('http');
const products = require('./data/products.json');
const { getProducts, createProduct } = require('./controller/productController');
const { fetchQueryStringFromURL, validate, sampleMiddleware } = require('./middlewares');

const RouterClass = require('./Router');
const Router = new RouterClass();
Router.addRoute('/getProducts', getProducts, 'get').middleware([fetchQueryStringFromURL, validate, sampleMiddleware]);
// Router.addRoute('/getProducts', getProducts, 'post').middleware(fetchQueryStringFromURL);

Router.addRoute('/createProduct', createProduct, 'post').middleware(fetchQueryStringFromURL);
Router.addRoute('/updateProduct', getProducts, 'put').middleware(fetchQueryStringFromURL);


const server = http.createServer((req, res) => {
    Router.route(req, res);
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server lintening on ${PORT}`);
});
