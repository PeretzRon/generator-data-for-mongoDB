const {MongoClient} = require('mongodb');
const {generateData} = require("./generatorData");
const {mongoDBUri, numberOfDocuments} = require("./settings");

async function main() {
    const client = new MongoClient(mongoDBUri);

    try {
        await client.connect();
        await insertMany(client);

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function insertMany(client) {
    const data = await generateData(numberOfDocuments);
    await client.db("persons").collection("users").insertMany(data);
}

async function listDatabases(client) {
    const databasesList = await client.db().admin().listDatabases();
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

main().catch(console.error);
