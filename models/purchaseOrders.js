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
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      consumptionTax: {
        type: Sequelize.DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: false
      },
      transportation: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      commission: {
        type: Sequelize.DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      createdBy: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      },
      createdByName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      updatedBy: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      },
      updatedByName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      startDate: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      deleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      ownerId: {
        type: Sequelize.DataTypes.UUID,
        allowNull: true
      },
      ownerName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      clause: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      createdAddress: {
        type: Sequelize.DataTypes.JSONB,
        allowNull: true
      },
      sendAddress: {
        type: Sequelize.DataTypes.JSONB,
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
