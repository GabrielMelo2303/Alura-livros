import express  from "express";
import db from "./config/dbConnect.js";
import books from "./models/Book.js"

db.on("error", console.log.bind(console, 'Error to Connect with Database'))
db.once("open", () => {
    console.log('Connected with database successfully')
})

const app = express();

app.use(express.json());

// const books = [
//     {id: 1, "titulo": "Clean Code"},
//     {id: 2, "titulo": "Dragon Ball Z"}
// ]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
} )

app.get('/books', (req, res) => {
    books.find((err, books) => {
        res.status(200).json(books);
    })

})

app.get('/books/:id', (req, res) => {
    let index = searchBook(req.params.id)
    res.json(books[index])
})

app.post('/books', (req, res) => {
    books.push(req.body);
    res.status(201).send('successfully Registered Book');
})

app.put('/books/:id', (req, res) => {
    let index = searchBook(req.params.id)
    books[index].titulo = req.body.titulo;
    res.json(books)
})

app.delete('/books/:id', (req, res) => {
    let {id} = req.params;
    let index = searchBook(id)
    books.splice(index, 1); // first param is what element do you want delete in Array and the second param is how many data do you want delete
    res.send(`Book ${id} removed successfully`);
})

function searchBook(id){
    return books.findIndex(book => book.id == id)
}

export default app