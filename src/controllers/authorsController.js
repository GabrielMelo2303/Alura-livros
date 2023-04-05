import authors from "../models/Author.js";

class AuthorController {

  static listAuthors = async (req, res) => {
    try{
      const authorsResult = await authors.find();

      res.status(200).json(authorsResult);
    } catch (error) {
      res.status(500).json({message: "Internal Server Error"});
    }

  };

  static listAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorsResult = await authors.findById(id);

      if(authorsResult !== null) {
        res.status(200).send(authorsResult);
      } else {
        res.status(404).send({message: "Author Not Found"});

      }
    } catch (error) {
      next(error);
    }  

  };

  static insertAuthor = async (req, res, next) => {
    try{  
      let author = new authors(req.body);

      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());
    } catch(error){
      next(error);
    }
  };

  static updateAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      await authors.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Successfully updated author" });
    } catch (error) {
      next(error);
    }
  };

  static deleteAuthor = async (req, res, next) => {
    try {
      const id = req.params.id;

      await authors.findByIdAndDelete(id);
      
      res.status(200).send({message: "Author removed successfully"});
    } catch (error) {
      next(error);
    }
  };
}

export default AuthorController;