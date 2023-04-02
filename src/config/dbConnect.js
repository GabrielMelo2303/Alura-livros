import mongoose from "mongoose";

mongoose.connect("mongodb+srv://<User>:<Password>@alura.d37dnpi.mongodb.net/alura-node")

let db = mongoose.connection;

export default db;