import Warehouse from './warehouse.js';
import sequelize from '../db/db-connection.js';
import { DataTypes } from 'sequelize';

//Table 'client'
const Client = sequelize.define(
  'Client',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize, modelName: 'Client', tableName: 'client', timestamps: false }
);

//A.hasOne(B); -> 1:1
//A.belongsTo(B); -> M:1
//A.hasMany(B); -> 1:M
//A.belongsToMany(B, { through: 'C' }); -> M:M

Client.hasMany(Warehouse, { foreignKey: 'id', allowNull: false });
Warehouse.belongsTo(Client, { foreignKey: 'id', allowNull: false });

export default Client;
