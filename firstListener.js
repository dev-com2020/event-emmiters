const TicketManager = require('./ticketManager');

const ticketManager = new TicketManager(10);

ticketManager.on('buy', () => {
    console.log('Kupiono bilet');
});


ticketManager.once('buy', () => {
    console.log('To jest tylko jednorazowy zakup biletu');
});

ticketManager.buy('test@mail.com',20);
ticketManager.buy('test@mail.com',20);
ticketManager.buy('test@mail.com',20);
ticketManager.buy('test@mail.com',20);
ticketManager.buy('test@mail.com',20);