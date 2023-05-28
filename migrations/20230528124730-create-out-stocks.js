'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('OutStocks', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      stockId: {
        type: Sequelize.DataTypes.UUID,
        field: 'stock_id',
        allowNull: true
      },
      outBy: {
        type: Sequelize.DataTypes.UUID,
        field: 'in_by',
        allowNull: true
      },
      outByName: {
        type: Sequelize.DataTypes.STRING,
        field: 'in_by_name',
        allowNull: true
      },
      outAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'in_at',
        allowNull: true
      },
      salesOrderId: {
        type: Sequelize.DataTypes.UUID,
        field: 'sales_order_id',
        allowNull: true
      },
      description: {
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
      deleted: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('OutStocks');
  }
};
