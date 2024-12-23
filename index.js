const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

// Create a new client instance
const client = new Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
    console.log('Client is ready!');
});

// When the client received QR-Code
client.on('qr', (qr) => {
    qrcode.generate(qr, {small: true});
    console.log('QR RECEIVED', qr);
});

client.on('message', function(message) {
    console.log(message.body);

    if (message.body === 'que time você torce?') {
        message.reply('Palmeiras');
    } else if (message.body === 'o que você quer comer?') {
        message.reply('Jiló');
    } else if (message.body === "Qual é o seu nome?") {
        message.reply('Piedro');
    }
} );

// Start your client
client.initialize();
