import Warehouse from './warehouse.js';
import Product from './product.js';
import { DataTypes } from 'sequelize';
import sequelize from '../db/db-connection.js';

const stockmovement = sequelize.define(
  'stockmovement',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Warehouse',
        key: 'id',
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Product',
        key: 'id',
      },
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    movementdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    isimport: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    tableName: 'stockmovement',
    timestamps: false,
  }
);
export default stockmovement;
