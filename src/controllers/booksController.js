import books from "../models/Book.js";

class BookController {

  static listBooks = async (req, res, next) => {
    try{
      const bookResult = await books.find()
        .populate("author")
        .populate("publishingCompany")
        .exec();

      res.status(200).json(bookResult);
    } catch (error) {
      next(error);
    }
  };

  static listBookById = async(req, res, next) => {
    try {
      const id = req.params.id;

      const booksResult = await books.findById(id)
        .populate("author", "name")
        .populate("publishingCompany", "name")
        .exec();

      res.status(200).send(booksResult);
    } catch (error) {
      next(error);
    }
        
  };

  static insertBook = async (req, res, next) => {
    try {
      let book = new books(req.body);
      
      const bookResult = await book.save();

      res.status(201).send(bookResult.toJSON());
    }
    catch (error) {
      next(error);
    }
  };

  static updateBook = async (req, res, next) => {
    try {
      const id = req.params.id;
      
      await books.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: " Book updated successfully" });
    } catch (error) {
      next(error);
    }

  };

  static deleteBook = async (req, res, next) => {
    try {
      const id = req.params.id;

      await books.findByIdAndDelete(id);
     
      res.status(200).send({message: "Book removed successfully"});
    } catch (error){
      next(error);
    }
  };

  static listBookByPublishingCompany = async (req, res, next) => {
    try{
      const publish = req.query.publish;
      const bookResult = await books.find({"publishingCompany" : publish})
        .populate("author", "name")
        .populate("publishingCompany", "name")
        .exec();
        
      res.status(200).send(bookResult);
    } catch (error) {
      next(error);
    }
  };
}

export default BookController;