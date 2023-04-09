'use strict';

const winston = require("winston");

class BaseController {
  /**
   * 
   */
  constructor () {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
  }
}

module.exports = BaseController;
