import app from './config.js';
import bodyParser from 'body-parser';
import clientService from '../services/clientService.js';

app.get('/clients', (req, res) => {
  clientService.findAll().then((result) => {
    res.send(result);
  });
});

app.get('/clients/:id', (req, res) => {
  const id = req.params.id;
  clientService.findById(id).then((client) => {
    res.send(client);
  });
});

app.post('/clients', (req, res) => {
  const allClients = req.body;
  clientService
    .createClient(
      allClients.firstname,
      allClients.username,
      allClients.password
    )
    .then((client) => {
      res.send(client);
    });
});

app.put('/clients', (req, res) => {
  //  const id = req.params.id;
  const client = req.body;
  //  client.client_id = id; // set the client_id from the URL path
  clientService.updateClient(client).then((result) => {
    res.send(result);
  });
});

app.delete('/clients', (req, res) => {
  //  const id = req.params.id;
  const client = req.body;
  clientService.deleteById(client).then((result) => {
    if (result === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(204);
    }
  });
});

export default app;
