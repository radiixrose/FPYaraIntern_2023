import { HOST, USER, PASSWORD, DB, dialect, pool } from './db.config.js';

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect,
  operationsAliases: false,
  pool,
});

// You can use the .authenticate() function to test if the connection is OK
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
testConnection();

export default sequelize;
