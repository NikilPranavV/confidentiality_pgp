const openpgp = require("openpgp");
const fs = require("fs");
const path = require("path");
const env = require("../config/env");

async function generateKeyPair(name, email, passphrase, filenamePrefix) {
    const key = await openpgp.generateKey({
        type: 'rsa',
        rsaBits: 2048,
        userIDs: [{ name, email }],
        passphrase
    });

    fs.writeFileSync(path.join("keys", `${filenamePrefix}-public.asc`), key.publicKey);
    fs.writeFileSync(path.join("keys", `${filenamePrefix}-private.asc`), key.privateKey);

    console.log(`Keys generated for ${name}`);
}

(async () => {
    await generateKeyPair(env.sender.name, env.sender.email, env.sender.passphrase, "sender");
    await generateKeyPair(env.recipient.name, env.recipient.email, env.recipient.passphrase, "recipient");
})();
