'use strict';

const { v4: uuidV4 } = require('uuid');

const BaseController = require('./baseController');
const { purchaseOrderService } = require('../services')
const Exceptions = require('../exceptions');

class PurchaseOrdersController extends BaseController {
  /**
   * 
   */
  constructor() {}

  /**
   * 
   */
  async create(req, res) {
    try {
      const { name } = req.body;
      const payload = {
        id: uuidV4(),
      };
      if (typeof name !== 'string')
        throw new Exceptions.BadInputException('Order name must be a valid string');
      
      const order = await purchaseOrderService.createOrder(this.logger, payload);
      res.status(201).send(order);
    } catch (err) {
      this.parseException(res, err);
    }
  }
}

module.exports = PurchaseOrdersController;
