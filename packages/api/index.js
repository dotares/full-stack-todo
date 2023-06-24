const { mongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.ATLAS_URI;

console.log(uri);
