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
      businessOpportunityId: {
        type: Sequelize.DataTypes.UUID,
        field: 'business_opportunity_id',
        allowNull: true
      },
      businessOpportunityName: {
        type: Sequelize.DataTypes.STRING,
        field: 'business_opportunity_name',
        allowNull: true
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL,
        defaultValue: 0,
        allowNull: true
      },
      customerId: {
        type: Sequelize.DataTypes.UUID,
        field: 'customer_id',
        allowNull: true
      },
      customerName: {
        type: Sequelize.DataTypes.STRING,
        field: 'customer_name',
        allowNull: true
      },
      contactorId: {
        type: Sequelize.DataTypes.UUID,
        field: 'contractor_id',
        allowNull: true
      },
      contactorName: {
        type: Sequelize.DataTypes.STRING,
        field: 'contractor_name',
        allowNull: true
      },
      status: {
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
      },
      endAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'end_at',
        allowNull: true
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
      transportation: {
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
