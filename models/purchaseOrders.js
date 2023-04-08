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
        allowNull: true
      },
      commission: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: false
      },
      status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdBy: {
        type: DataTypes.UUID,
        allowNull: true
      },
      createdByName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      updatedBy: {
        type: DataTypes.UUID,
        allowNull: true
      },
      updatedByName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
      },
      startDate: {
        type: DataTypes.DATE,
        allowNull: false
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      ownerId: {
        type: DataTypes.UUID,
        allowNull: true
      },
      ownerName: {
        type: DataTypes.STRING,
        allowNull: true
      },
      clause: {
        type: DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true
      },
      createdAddress: {
        type: DataTypes.JSONB,
        allowNull: true
      },
      sendAddress: {
        type: DataTypes.JSONB,
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
