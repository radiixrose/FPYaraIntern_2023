import app from './config.js';
import bodyParser from 'body-parser';
import productService from '../services/productService.js';
import productController from './controllers.js';

app.get('/products', (req, res) => {
  productService.findAll().then((result) => {
    res.send(result);
  });
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  productService.findById(id).then((product) => {
    res.send(product);
  });
});

app.post('/products', (req, res) => {
  const allProducts = req.body;
  productService
    .createProduct(
      allProducts.productname,
      allProducts.sizeperunit,
      allProducts.ishazardous,
      allProducts.warehouse_id
    )
    .then((product) => {
      res.send(product);
    });
});

app.put('/products', (req, res) => {
  const product = req.body;
  productService.updateProduct(product).then((result) => {
    res.send(result);
  });
});

app.delete('/products', (req, res) => {
  const product = req.body;
  productService.deleteById(product).then((result) => {
    if (result === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

export default app;
