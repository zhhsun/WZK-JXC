'use strict';

const BaseException = require('./baseException');

class BadInputException extends BaseException {
  /**
   * 
   */
  constructor(message) {
    super('ERR_BAD_INPUT', message);
  }
}

module.exports = {
  BadInputException
};
