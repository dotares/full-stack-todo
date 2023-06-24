require("dotenv").config();

const { mongoClient } = require("mongodb");
const uri = process.env.ATLAS_URI;
const client = new MongoClient(uri);

const databaseName = "todoList";
const collectionName = "todoItems";
const databaseCollection = client.db(databaseName).collection(collectionName);

const connectToDatabase = async () => {};
