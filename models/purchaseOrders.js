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
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      consumptionTax: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        field: 'consumption_tax',
        allowNull: true,
      },
      transportation: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      commission: {
        type: DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
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
        type: DataTypes.TIME,
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
        type: DataTypes.TIME,
        field: 'updated_at',
        defaultValue: null,
        allowNull: true,
      },
      startDate: {
        type: DataTypes.TIME,
        field: 'start_at',
        defaultValue: null,
        allowNull: true,
      },
      deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      ownerId: {
        type: DataTypes.UUID,
        field: 'owner_id',
        defaultValue: null,
        allowNull: true,
      },
      ownerName: {
        type: DataTypes.STRING,
        field: 'owner_name',
        defaultValue: null,
        allowNull: true,
      },
      clause: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        defaultValue: null,
        allowNull: true,
      },
      createdAddress: {
        type: DataTypes.JSONB,
        field: 'created_address',
        defaultValue: null,
        allowNull: true,
      },
      sendAddress: {
        type: DataTypes.JSONB,
        field: 'send_address',
        defaultValue: null,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'PurchaseOrders',
    }
  );

  return purchaseOrders;
};
