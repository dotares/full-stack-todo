require("dotenv").config();

const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

let connection;

const run = async () => {
    try {
        connection = await client.connect();
        console.log("Connected to todoList database");
    } catch (e) {
        console.error(e);
    }
};

run();

let db = connection.db("todoList").collection("todoItems");

export default db;
