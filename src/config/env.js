require('dotenv').config();

module.exports = {
    sender: {
        name: process.env.SENDER_NAME,
        email: process.env.SENDER_EMAIL,
        passphrase: process.env.SENDER_PASSPHRASE
    },
    recipient: {
        name: process.env.RECIPIENT_NAME,
        email: process.env.RECIPIENT_EMAIL,
        passphrase: process.env.RECIPIENT_PASSPHRASE
    }
};
