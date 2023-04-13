import app from './src/controllers/config.js';
import controllers from './src/controllers/controllers.js';
import http from 'http';

const server = http.createServer(app);

app.get('/', (request, response) => {
  response.send('Hey! This is your server response!!!');
});

server.listen(5000, () => console.log('app is running'));
