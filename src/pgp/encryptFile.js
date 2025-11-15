const openpgp = require("openpgp");
const fs = require("fs");
const path = require("path");

async function encryptFile(inputPath, outputPath) {
    const recipientPublicKeyArmored = fs.readFileSync(path.join("keys", "recipient-public.asc"), "utf8");

    const publicKey = await openpgp.readKey({ armoredKey: recipientPublicKeyArmored });

    const fileContent = fs.readFileSync(inputPath, "utf8");

    const encrypted = await openpgp.encrypt({
        message: await openpgp.createMessage({ text: fileContent }),
        encryptionKeys: publicKey
    });

    fs.writeFileSync(outputPath, encrypted);
    console.log("File encrypted:", outputPath);
}

module.exports = encryptFile;
