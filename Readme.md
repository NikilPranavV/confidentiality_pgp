📌 PGP Confidentiality — File Encryption & Decryption (Node.js, CommonJS)

This project implements PGP-based confidentiality in Node.js using the openpgp library.
It allows secure file encryption and decryption between a sender and recipient using public–private key pairs.

The implementation follows modern best practices and includes:

✔ Full folder structure
✔ Key generation
✔ Encryption & decryption
✔ TXT file encryption workflow

⚙️ Installation & Setup
1. Install dependencies
npm install


Or initialize from scratch:

npm init -y
npm install openpgp dotenv

🔐 Environment Variables (.env)

Create a .env file in the root:

# Sender Identity
SENDER_NAME=Sender
SENDER_EMAIL=sender@example.com
SENDER_PASSPHRASE=sender123

# Recipient Identity
RECIPIENT_NAME=Recipient
RECIPIENT_EMAIL=recipient@example.com
RECIPIENT_PASSPHRASE=recipient123

🗝️ Generate PGP Keys

Run the script to automatically generate key pairs:

node src/pgp/generateKeys.js


This will create:

keys/
   sender-public.asc
   sender-private.asc
   recipient-public.asc
   recipient-private.asc

🔏 Encrypt a File (Confidentiality)

Place a file inside data/input.txt.

To encrypt:

node src/index.js


This will create:

data/encrypted.pgp


The file is encrypted using the recipient’s public key so only the intended recipient can decrypt it.

🔓 Decrypt a File

Decryption is also handled automatically by:

node src/index.js


The result appears as:

data/decrypted.txt


The file is decrypted using the recipient’s private key + passphrase.

📘 How It Works
🔹 Sender → Encrypts File Using Recipient's Public Key

This ensures:

Only the intended recipient (who owns the private key) can decrypt.

Even if intercepted, attackers cannot read the content.

🔹 Recipient → Decrypts File Using Private Key

The recipient loads their private key, enters the passphrase, and decrypts the message.

This provides full PGP Confidentiality.

📄 Scripts Overview
Script	Purpose
src/pgp/generateKeys.js	Generates sender & recipient public/private keys
src/pgp/encryptFile.js	Encrypts a .txt file
src/pgp/decryptFile.js	Decrypts an encrypted .pgp file
src/index.js	Complete workflow (encrypt → decrypt)
