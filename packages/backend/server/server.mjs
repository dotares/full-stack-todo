import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

// require("dotenv").config({ path: "../" });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 5050;
const app = express();

console.log(PORT);

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
