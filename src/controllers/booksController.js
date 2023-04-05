import books from "../models/Book.js";

class BookController {

  static listBooks = async (req, res) => {
    try{
      const bookResult = await books.find()
        .populate("author")
        .populate("publishingCompany")
        .exec();

      res.status(200).json(bookResult);
    } catch (error) {
      res.status(500).json({message: "Internal Server Error"});
    }
  };

  static listBookById = async(req, res) => {
    try {
      const id = req.params.id;

      const booksResult = await books.findById(id)
        .populate("author", "name")
        .populate("publishingCompany", "name")
        .exec();

      res.status(200).send(booksResult);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - Book not Found` });

    }
        
  };

  static insertBook = async (req, res) => {
    try {
      let book = new books(req.body);
      
      const bookResult = await book.save();

      res.status(201).send(bookResult.toJSON());
    }
    catch (error) {
      res.status(500).send({ message: `${error.message} - Failed to insert a new book` });
    }
  };

  static updateBook = async (req, res) => {
    try {
      const id = req.params.id;
      
      await books.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: " Book updated successfully" });
    } catch (error) {
      res.status(500).send({ message: `${error.message} - Cannot Update this Book` });
    }

  };

  static deleteBook = async (req, res) => {
    try {
      const id = req.params.id;

      await books.findByIdAndDelete(id);
     
      res.status(200).send({message: "Book removed successfully"});
    } catch (error){
      
      res.status(500).send({message: `${error.message} - Cannot Remove this Book`});
    }
  };

  static listBookByPublishingCompany = async (req, res) => {
    try{
      const publish = req.query.publish;
      const bookResult = await books.find({"publishingCompany" : publish})
        .populate("author", "name")
        .populate("publishingCompany", "name")
        .exec();
        
      res.status(200).send(bookResult);
    } catch (error) {
      res.status(500).json({message: "Internal Server Error"});
    }
  };
}

export default BookController;