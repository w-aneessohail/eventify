import "reflect-metadata";
import * as express from "express";
import * as dotenv from "dotenv";
import { initdatabase } from "./config/dataSource.config";
dotenv.config();

const app = express();
const PORT = process.env.PORT || "3000";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Eventify API!");
});

initdatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database:", error);
  });
