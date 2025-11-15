const openpgp = require("openpgp");
const fs = require("fs");
const path = require("path");
const env = require("../config/env");

async function decryptFile(inputPath, outputPath) {
    const privateKeyArmored = fs.readFileSync(path.join("keys", "recipient-private.asc"), "utf8");

    const privateKey = await openpgp.decryptKey({
        privateKey: await openpgp.readPrivateKey({ armoredKey: privateKeyArmored }),
        passphrase: env.recipient.passphrase
    });

    const encryptedData = fs.readFileSync(inputPath, "utf8");

    const message = await openpgp.readMessage({ armoredMessage: encryptedData });

    const { data: decrypted } = await openpgp.decrypt({
        message,
        decryptionKeys: privateKey
    });

    fs.writeFileSync(outputPath, decrypted);
    console.log("File decrypted:", outputPath);
}

module.exports = decryptFile;
