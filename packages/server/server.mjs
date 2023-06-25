import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.static(path.join(__dirname, "../client")));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
