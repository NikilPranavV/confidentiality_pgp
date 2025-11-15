const fs = require("fs");

module.exports = {
    readFile(path) {
        return fs.readFileSync(path, "utf8");
    },
    writeFile(path, data) {
        fs.writeFileSync(path, data, "utf8");
    }
};
