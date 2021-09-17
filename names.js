const fs = require('fs').promises;

async function getNames() {
    let data = await fs.readFile('./resources/first-names.txt', 'utf8');
    const firstNames = data.split("\n");

    data = await fs.readFile('./resources/last-names.txt', 'utf8');
    const lastNamesArray = data.split("\n");
    const lastNames = lastNamesArray.map(value => value.replace('\r', ''));
    return {
        firstNames,
        lastNames
    };
}

module.exports = {
    getNames
};


