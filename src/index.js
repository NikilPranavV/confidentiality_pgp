const encryptFile = require("./pgp/encryptFile");
const decryptFile = require("./pgp/decryptFile");

(async () => {
    await encryptFile("data/input.txt", "data/encrypted.pgp");
    await decryptFile("data/encrypted.pgp", "data/decrypted.txt");
})();
