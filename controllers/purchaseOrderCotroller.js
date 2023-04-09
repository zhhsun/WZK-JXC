'use strict';

const { v4: uuidV4 } = require('uuid');

const { purchaseOrderService } = require('../services')

class PurchaseOrdersController extends BaseController {
  /**
   * 
   */
  constructor() {}

  /**
   * 
   */
  create(req, res) {
    try {
      const { name } = req.body;
      const payload = {
        id: uuidV4(),
      };
      if (typeof name !== 'string') res.status(400).send();
      
      const order = purchaseOrderService.createOrder(this.logger, payload);
      res.status(201).send(order);
    } catch (err) {
      res.status(400).send(error);
    }
  }
}

module.exports = new PurchaseOrdersController();
