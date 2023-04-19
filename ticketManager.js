const EventEmitter = require('events');

class TicketManager extends EventEmitter {
    constructor(supply) {
        super();
        this.supply = supply;
    }

    buy(email, price) {
        if (this.supply > 0){
            this.supply--;
            this.emit('buy', email, price, Date.now());
            console.log('Po zakupie pozostało biletów: ' + this.supply)
            return;
        }
        this.emit('error', new Error('Brak biletów'));
    }
}
module.exports = TicketManager;