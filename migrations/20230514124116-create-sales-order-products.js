'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('SalesOrderProducts', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
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
    return queryInterface.dropTable('SalesOrderProducts');
  }
};
