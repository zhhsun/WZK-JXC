'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Products extends Model {}

  purchaseOrders.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        defaultValue: null,
        allowNull: true,
      },
      createdByName: {
        type: DataTypes.STRING,
        field: 'created_by_name',
        defaultValue: null,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        defaultValue: null,
        allowNull: true,
      },
      updatedByName: {
        type: DataTypes.STRING,
        field: 'updated_by_name',
        defaultValue: null,
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        defaultValue: null,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      }
    },
    {
      sequelize,
      modelName: 'Products',
    }
  );

  return Products;
};
