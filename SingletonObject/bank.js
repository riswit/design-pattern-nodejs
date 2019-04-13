let cash = 0;

const Bank = {
    deposit(amount){
        cash += amount;
        return cash;
    },
    withdraw(amount){
        if (amount <= cash){
            cash -= amount;
        } else {
            return false;
        }
    },
    total(){
        return cash;
    }
}

module.exports = Bank;