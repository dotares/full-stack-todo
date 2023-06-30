require("dotenv").config();

const { MongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

let connection;

try {
    connection = await client.connect();
} catch (e) {
    console.error(e);
}

let db = connection.db("todoList").collection("todoItems");

export default db;
