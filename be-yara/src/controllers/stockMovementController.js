import app from './config.js';
import bodyParser from 'body-parser';
import stockMovementService from '../services/stockMovementService.js';

app.get('/stockmovements', (req, res) => {
  stockMovementService.findAll().then((result) => {
    res.send(result);
  });
});

app.get('/stockmovements/:id', (req, res) => {
  const id = req.params.id;
  stockMovementService.findById(id).then((stockmovement) => {
    res.send(stockmovement);
  });
});

app.post('/stockmovements', (req, res) => {
  const allstockMovement = req.body;
  stockMovementService
    .createStockMovement(
      allstockMovement.amount,
      allstockMovement.movementdate,
      allstockMovement.isimport,
      allstockMovement.warehouse_id,
      allstockMovement.product_id
    )
    .then((stockmovement) => {
      res.send(stockmovement);
    });
});

app.put('/stockmovements', (req, res) => {
  const stockmovement = req.body;
  stockMovementService.updateStockMovement(stockmovement).then((result) => {
    res.send(result);
  });
});

app.delete('/stockmovements', (req, res) => {
  const stockmovement = req.body;
  stockMovementService.deleteById(stockmovement).then((result) => {
    if (result === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

export default app;
