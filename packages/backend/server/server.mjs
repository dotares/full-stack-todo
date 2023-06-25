import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

config({ path: path.join(__dirname, "../.env") });

const PORT = process.env.PORT;
const app = express();

app.use(express.static(path.join(__dirname, "../../client/dist")));

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});
