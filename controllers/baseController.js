'use strict';

const winston = require("winston");
const Exceptions = require("../exceptions");

class BaseController {
  /**
   * 
   */
  constructor () {
    this.logger = winston.createLogger({
      transports: [new winston.transports.Console()],
    });
  }

  parseException(res, err) {
    if (err instanceof Exceptions.BadInputException) {
      res.status(400).send(err);
    } else {
      res.status(500).send(err);
    }
  }
}

module.exports = BaseController;
