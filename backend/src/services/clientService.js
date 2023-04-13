import Client from '../models/client.js';
import { Op } from 'sequelize';

async function findAll() {
  const result = await Client.findAll();
  return result;
}

async function findById(id) {
  return await Client.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

async function createClient(firstname, username, password) {
  try {
    const client = await Client.create({
      firstname: firstname,
      username: username,
      password: password,
    });
    return client;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateClient(client) {
  if (!client.firstname || !client.username) {
    throw new Error('Client first name and username are required');
  }
  const result = await Client.update(
    {
      firstname: client.firstname,
      username: client.username,
    },
    {
      where: {
        id: {
          [Op.eq]: client.id,
        },
      },
    }
  );
  if (result[0] === 0) {
    console.error(`No row updated for client ID ${client.id}`);
  }
  return result;
}

async function deleteById(client) {
  await Client.destroy({
    where: {
      id: {
        [Op.eq]: client.id,
      },
    },
  });
}

export default {
  findAll,
  findById,
  createClient,
  updateClient,
  deleteById,
};
