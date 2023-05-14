'use strict';

const { v4: uuidV4 } = require('uuid');
const winston = require('winston');
const logger = winston.createLogger({
  transports: [new winston.transports.Console()],
});

const BaseController = require('./baseController');
const { purchaseOrderService } = require('../services')
const Exceptions = require('../exceptions');

module.exports = {
  /**
   * 
   */
  async create(req, res) {
    try {
      const { name, code } = req.body;

      if (typeof name !== 'string')
        throw new Exceptions.BadInputException('Order name must be a valid string');
      if (typeof code !== 'string')
        throw new Exceptions.BadInputException('Order code must be a valid string');

        const payload = {
          id: uuidV4(),
          name,
          code
        };
      
      const order = await purchaseOrderService.createOrder(logger, payload);
      res.status(201).send(order);
    } catch (err) {
      console.log(err);
      BaseController.parseException(res, err);
    }
  }
};
