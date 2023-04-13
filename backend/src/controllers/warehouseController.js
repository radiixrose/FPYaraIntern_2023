import app from './config.js';
import bodyParser from 'body-parser';
import warehouseService from '../services/warehouseService.js';

app.get('/warehouses', (req, res) => {
  warehouseService.findAll().then((result) => {
    res.send(result);
  });
});

app.get('/warehouses/:id', (req, res) => {
  const id = req.params.id;
  warehouseService.findById(id).then((warehouse) => {
    res.send(warehouse);
  });
});

app.post('/warehouses', (req, res) => {
  const allWarehouses = req.body;
  warehouseService
    .createWarehouse(
      allWarehouses.warehousename,
      allWarehouses.maxstockamount,
      allWarehouses.client_id
    )
    .then((warehouse) => {
      res.send(warehouse);
    });
});

app.put('/warehouses', (req, res) => {
  const warehouse = req.body;
  warehouseService.updateWarehouse(warehouse).then((result) => {
    res.send(result);
  });
});

app.delete('/warehouses', (req, res) => {
  const warehouse = req.body;
  warehouseService.deleteById(warehouse).then((result) => {
    if (result === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

export default app;
