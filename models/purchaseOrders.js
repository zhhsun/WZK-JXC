'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class purchaseOrders extends Model {}

  purchaseOrders.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      consumptionTax: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: false
      },
      transportation: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      commission: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: true
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      createdBy: {
        type: DataTypes.UUID,
        defaultValue: null,
        allowNull: true
      },
      createdByName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.UUID,
        defaultValue: null,
        allowNull: true
      },
      updatedByName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
      },
      startDate: {
        type: DataTypes.DATE,
        defaultValue: null,
        allowNull: true
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      ownerId: {
        type: DataTypes.UUID,
        defaultValue: null,
        allowNull: true
      },
      ownerName: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      clause: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true
      },
      createdAddress: {
        type: DataTypes.JSONB,
        defaultValue: null,
        allowNull: true
      },
      sendAddress: {
        type: DataTypes.JSONB,
        defaultValue: null,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'PurchaseOrders',
    }
  );

  return purchaseOrders;
};
