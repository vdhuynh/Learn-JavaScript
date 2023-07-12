class Payment {
    /**
    * @param {number} amount
    */
    constructor(amount) {
        this.amount = amount;
    }

    set amount(amount) {
        this._cents = amount * 100;
    }

    get amount() {
        return this._cents;
    }

    /* TODO: create getter and setter for 'amount' */
}

// Sample usage - do not modify
const payment = new Payment(10); // 10 USD
console.log(payment.amount); // 1000 (value in cents)
// apply discount
payment.amount = 7; // 7 USD
console.log(payment.amount); // 700 (value in cents)
