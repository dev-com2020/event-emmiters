const TicketManager = require('./ticketManager');
const EmailService = require('./emailService');
const DatabaseService = require('./databaseService');

const ticketManager = new TicketManager(5);
const emailService = new EmailService();
const databaseService = new DatabaseService();
const onBuy = () => {
    console.log('Niebawem usuniemy ten listener');
};

ticketManager.on('buy', (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp);
});
ticketManager.on('buy',onBuy);
ticketManager.on('error', (error) => {
    console.log(error.message);
});
// ticketManager.off('buy',onBuy); // usuwamy listenera
ticketManager.removeAllListeners('buy'); // usuwamy wszystkie listenery

console.log(`Mamy ${ticketManager.listenerCount('buy')} listenerów na zdarzenie buy`)
console.log(`Mamy ${ticketManager.listenerCount('error')} listenerów na zdarzenie error`)

ticketManager.buy('test2020@onet.pl',10);
ticketManager.buy('test2020@onet.pl',10);
ticketManager.buy('test2020@onet.pl',10);
ticketManager.buy('test2020@onet.pl',10);
ticketManager.buy('test2020@onet.pl',10);
ticketManager.buy('test2020@onet.pl',10);
