import "reflect-metadata";
import * as express from "express";
import * as dotenv from "dotenv";
import { userRouter } from "./route/user.route";
import { initdatabase } from "./config/dataSource.config";

dotenv.config();

const app = express();
const PORT = process.env.PORT || "3000";

app.use(express.json());


app.use("/api", userRouter);

initdatabase()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to initialize database:", error);
  });
