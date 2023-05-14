'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class PurchaseOrderProducts extends Model {}

  purchaseOrders.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      orderId: {
        type: Sequelize.DataTypes.UUID,
        field: 'order_id',
        allowNull: false
      },
      unitPrice: {
        type: Sequelize.DataTypes.DECIMAL,
        field: 'unit_price',
        default: 0,
        allowNull: false
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER,
        default: 0,
        allowNull: false
      },
      discount: {
        type: Sequelize.DataTypes.DECIMAL,
        default: 0,
        allowNull: false
      },
      tax: {
        type: Sequelize.DataTypes.DECIMAL,
        default: 0,
        allowNull: false
      },
      currencyType: {
        type: Sequelize.DataTypes.STRING,
        field: 'currency_type',
        allowNull: true
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
      modelName: 'PurchaseOrderProducts',
    }
  );

  return PurchaseOrderProducts;
};
