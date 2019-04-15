class Customer {
    constructor(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.location = builder.location;
        this.languages = builder.languages;
    }
 
    showInfo() {
        console.log(this);
    }
}
 
module.exports = Customer;