const Product = require('../models/product.js');
const Warehouse = require('../models/warehouse.js');
const StockMovement = require('../models/stockMovement.js');
const { Op } = require('sequelize');

async function findAll() {
  const result = await stockmovement.findAll();
  return result;
}

async function findById(id) {
  return await stockmovement.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

async function createStockMovement(
  amount,
  movementdate,
  isimport,
  warehouse_id,
  product_id
) {
  try {
    const newStockMovement = await stockmovement.create(
      {
        amount,
        movementdate,
        isimport,
        warehouse_id,
        product_id,
      },
      {
        include: [
          { model: Warehouse, as: 'Warehouse' },
          { model: Product, as: 'Product' },
        ],
      }
    );
    return newStockMovement;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateStockMovement(stockMovement) {
  if (
    !stockMovement.amount ||
    !stockMovement.movementdate ||
    !stockMovement.warehouse_id ||
    !stockMovement.product_id
  ) {
    throw new Error(
      'amount, movement date, is import, warehouse id and product id are required'
    );
  }

  const result = await stockmovement.update(
    {
      amount: stockMovement.amount,
      movementdate: stockMovement.movementdate,
      isimport: stockMovement.isimport,
      warehouse_id: stockMovement.warehouse_id,
      product_id: stockMovement.product_id,
    },
    {
      where: {
        id: {
          [Op.eq]: stockMovement.id,
        },
      },
      include: [
        { model: Warehouse, as: 'Warehouse' },
        { model: Product, as: 'Product' },
      ],
    }
  );
  if (result[0] === 0) {
    console.error(`No row updated for stockMovement ID ${stockMovement.id}`);
  }
  return result;
}

async function deleteById(existingStockMovement) {
  await stockmovement.destroy({
    where: {
      id: {
        [Op.eq]: existingStockMovement.id,
      },
    },
  });
}

export default {
  findAll,
  findById,
  createStockMovement,
  updateStockMovement,
  deleteById,
};
