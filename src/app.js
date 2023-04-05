import express  from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";
import manipulateErrors from "./middlewars/manipulateErrors.js";

db.on("error", console.log.bind(console, "Error to Connect with Database"));
db.once("open", () => {
  console.log("Connected with database successfully");
});

const app = express();
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(manipulateErrors);

app.use(express.json());

export default app;