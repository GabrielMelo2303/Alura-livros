import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        nationality: {type: String}
    },
    {
        versionKey: false // version of data
    }
)

const authors = mongoose.model("authors", authorSchema)

export default authors