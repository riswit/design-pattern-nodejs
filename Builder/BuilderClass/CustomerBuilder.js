const Customer = require('./Customer');
 
class CustomerBuilder {
    constructor(name) {
        this.name = name;
    }
 
    setAge(age) {
        this.age = age;
        return this;
    }
 
    setLocation(location) {
        this.location = location;
        return this;
    }
 
    setLanguages(languages) {
        this.languages = languages;
        return this;
    }
 
    buildInfo() {
        return new Customer(this);
    }
}
 
module.exports = CustomerBuilder;