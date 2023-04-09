'use strict';

const { PurchaseOrders } = require('../models')

class PurchaseOrderService {
  /**
   * 
   */
  constructor () {}

  /**
   * create a new purchase order
   * @param {Object} logger
   * @param {Object} order
   */
  async createOrder(logger, order) {
    try {
      return await PurchaseOrders.create({ ...order });
    } catch (error) {
      logger.error('Create purchase order error: ', error);
      throw error;
    }
  }
}

module.exports = new PurchaseOrderService();