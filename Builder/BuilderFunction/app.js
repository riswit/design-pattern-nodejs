const PersonBuilder = require('./PersonBuilder');
 
const jack =
    new PersonBuilder().setName('Jack').setAge(25).setLanguages(['English', 'German']).buildInfo();
 
console.log(jack);
 
const adam =
    new PersonBuilder().setName('Adam').setLocation('US').setLanguages(['English']).buildInfo();
 
console.log(adam);