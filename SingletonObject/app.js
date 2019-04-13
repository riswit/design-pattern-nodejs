const fund = require('./bank');
const atm1 = require('./bank');
const atm2 = require('./bank');

fund.deposit(10000)

atm1.deposit(20)
atm2.withdraw(120)

console.log('total-atm1:' + atm1.total())
console.log('total-atm2:' + atm2.total())

fund.deposit(2000)

console.log('total-fund:' + fund.total())
