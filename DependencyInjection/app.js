const Bank = require('./Bank');
 
 const logger = require('./logger-console');
//const logger = require('./logger-file');
Bank.config({
  logger
});
 
Bank.deposit(50000);
Bank.withdraw(200);
Bank.withdraw(500);
Bank.total();