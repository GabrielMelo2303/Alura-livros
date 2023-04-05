import mongoose from "mongoose";

mongoose.connect(process.env.STRING_CONNECTION_DATABASE)

let db = mongoose.connection;

export default db;