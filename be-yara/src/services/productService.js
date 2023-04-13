import Product from '../models/product.js';
import Warehouse from '../models/warehouse.js';
import { Op } from 'sequelize';

async function findAll() {
  const result = await Product.findAll();
  return result;
}

async function findById(id) {
  return await Product.findAll({
    where: {
      id: {
        [Op.eq]: id,
      },
    },
  });
}

async function createProduct(
  productname,
  sizeperunit,
  ishazardous,
  warehouse_id
) {
  try {
    const product = await Product.create(
      {
        productname,
        sizeperunit,
        ishazardous,
        warehouse_id,
      },
      { include: [{ model: Warehouse, as: 'Warehouse' }] }
    );
    return product;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateProduct(product) {
  if (!product.productname || !product.sizeperunit || !product.warehouse_id) {
    throw new Error(
      'product name, size per unit and warehouse id are required'
    );
  }

  const result = await Product.update(
    {
      productname: product.productname,
      sizeperunit: product.sizeperunit,
      ishazardous: product.ishazardous,
      warehouse_id: product.warehouse_id,
    },
    {
      where: {
        id: {
          [Op.eq]: product.id,
        },
      },
      include: [{ model: Warehouse, as: 'Warehouse' }],
    }
  );
  if (result[0] === 0) {
    console.error(`No row updated for product ID ${product.id}`);
  }
  return result;
}

async function deleteById(product) {
  await Product.destroy({
    where: {
      id: {
        [Op.eq]: product.id,
      },
    },
  });
}

export default {
  findAll,
  findById,
  createProduct,
  updateProduct,
  deleteById,
};
