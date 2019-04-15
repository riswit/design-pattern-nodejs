const CustomerBuilder = require('./CustomerBuilder');
 
const jack =
    new CustomerBuilder('Jack').setAge(25).setLanguages(['English', 'German']).buildInfo();
 
jack.showInfo();
 
const adam =
    new CustomerBuilder('Adam').setLocation('US').setLanguages(['English']).buildInfo();
 
adam.showInfo();