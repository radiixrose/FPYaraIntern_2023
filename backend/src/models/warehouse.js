import Product from './product.js';
import Client from './client.js';
import StockMovement from './stockMovement.js';
import { DataTypes } from 'sequelize';
import sequelize from '../db/db-connection.js';

const Warehouse = sequelize.define(
  'Warehouse',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    warehousename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxstockamount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    client_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Client',
        key: 'client_id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Warehouse',
    tableName: 'warehouse',
    timestamps: false,
  }
);

Warehouse.hasMany(Product, { foreignKey: 'id', allowNull: false });
Product.belongsTo(Warehouse, { foreignKey: 'id', allowNull: false });

Warehouse.hasMany(StockMovement, {
  foreignKey: 'id',
  allowNull: false,
});
StockMovement.belongsTo(Warehouse, {
  foreignKey: 'id',
  allowNull: false,
});

export default Warehouse;
