'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('PurchaseOrders', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
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
        field: 'consumption_tax',
        allowNull: true
      },
      transportation: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      commission: {
        type: Sequelize.DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: true
      },
      status: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      createdBy: {
        type: Sequelize.DataTypes.UUID,
        field: 'created_by',
        allowNull: true
      },
      createdByName: {
        type: Sequelize.DataTypes.STRING,
        field: 'created_by_name',
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'created_at',
        allowNull: false
      },
      updatedBy: {
        type: Sequelize.DataTypes.UUID,
        field: 'updated_by',
        allowNull: true
      },
      updatedByName: {
        type: Sequelize.DataTypes.STRING,
        field: 'updated_by_name',
        allowNull: true
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'updated_at',
        allowNull: true
      },
      startDate: {
        type: Sequelize.DataTypes.DATE,
        field: 'start_at',
        allowNull: true
      },
      deleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      ownerId: {
        type: Sequelize.DataTypes.UUID,
        field: 'owner_id',
        allowNull: true
      },
      ownerName: {
        type: Sequelize.DataTypes.STRING,
        field: 'owner_name',
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
        field: 'created_address',
        allowNull: true
      },
      sendAddress: {
        type: Sequelize.DataTypes.JSONB,
        field: 'send_address',
        allowNull: true
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('PurchaseOrders');
  }
};
