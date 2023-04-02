import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {type: String},
    title: {type: String, required: true},
    author: {type: String, required: true},
    publishingCompany: {type: String, required: true},
    pageNumber: {type: Number}
});

const books = mongoose.model('livros', bookSchema); // Reminder: Change a First param to Books when I drop the old table at Atlas

export default books