import Warehouse from '../models/warehouse.js';
import Client from '../models/client.js';
import { Op } from 'sequelize';

async function findAll() {
  const result = await Warehouse.findAll();
  return result;
}

async function findById(id) {
  return await Warehouse.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

async function createWarehouse(warehousename, maxstockamount, client_id) {
  try {
    const warehouse = await Warehouse.create(
      {
        warehousename: warehousename,
        maxstockamount: maxstockamount,
        client_id: client_id,
      },
      { include: [{ model: Client, as: 'Client' }] }
    );
    return warehouse;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateWarehouse(warehouse) {
  if (
    !warehouse.warehousename ||
    !warehouse.maxstockamount ||
    !warehouse.client_id
  ) {
    throw new Error(
      'warehouse name, max stock amount and client id are required'
    );
  }

  const result = await Warehouse.update(
    {
      warehousename: warehouse.warehousename,
      maxstockamount: warehouse.maxstockamount,
      client_id: warehouse.client_id,
    },
    {
      where: {
        id: {
          [Op.eq]: warehouse.id,
        },
      },
      include: [{ model: Client, as: 'Client' }],
    }
  );
  if (result[0] === 0) {
    console.error(`No row updated for warehouse ID ${warehouse.id}`);
  }
  return result;
}

async function deleteById(warehouse) {
  await Warehouse.destroy({
    where: {
      id: {
        [Op.eq]: warehouse.id,
      },
    },
  });
}

export default {
  findAll,
  findById,
  createWarehouse,
  updateWarehouse,
  deleteById,
};
