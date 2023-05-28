'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Stocks', {
      id: {
        type: Sequelize.DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      code: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      batchSize: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'batch_size',
        defaultValue: 0,
        allowNull: false
      },
      quantity: {
        type: Sequelize.DataTypes.INTEGER,
        defaultValue: 0,
        allowNull: false
      },
      totalQuantity: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'total_quantity',
        defaultValue: 0,
        allowNull: false
      },
      safeQuantity: {
        type: Sequelize.DataTypes.INTEGER,
        field: 'safe_quantity',
        defaultValue: 0,
        allowNull: false
      },
      location: {
        type: Sequelize.DataTypes.JSONB,
        field: 'created_address',
        allowNull: true
      },
      inAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'in_at',
        allowNull: true
      },
      endAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'end_at',
        allowNull: true
      },
      note: {
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
    return queryInterface.dropTable('Stocks');
  }
};
