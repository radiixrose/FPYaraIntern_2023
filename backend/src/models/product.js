import sequelize from '../db/db-connection.js';
import { DataTypes } from 'sequelize';
import Warehouse from './warehouse.js';
import StockMovement from './stockMovement.js';

// Table 'Product'
const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    productname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sizeperunit: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ishazardous: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Warehouse,
        key: 'warehouse_id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Product',
    tableName: 'product',
    timestamps: false,
  }
);

Product.hasMany(StockMovement, { foreignKey: 'id', allowNull: false });
StockMovement.belongsTo(Product, {
  foreignKey: 'id',
  allowNull: false,
});

export default Product;
