const fs = require('fs').promises;

async function getLocations() {
    let data = await fs.readFile('./resources/locations.json', 'utf8');
    return JSON.parse(data);
}

module.exports = {
    getLocations
};

