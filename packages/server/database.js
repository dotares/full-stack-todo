require("dotenv").config();

const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

const databaseName = "todoList";
const collectionName = "todoItems";
const databaseCollection = client.db(databaseName).collection(collectionName);

const connectToDatabase = async () => {
    try {
        await client.connect();
        console.log(`You're connected to your database ${databaseName}`);
    } catch (err) {
        console.error(`Error: ${err}`);
    }
};

const pipeline = [];

const main = async () => {
    try {
        await connectToDatabase();
        let result = databaseCollection.aggregate(pipeline);
        for await (doc of result) {
            console.log(doc);
        }
    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
};

main();
