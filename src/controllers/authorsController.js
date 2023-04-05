import mongoose from "mongoose";
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

  static listAuthorById = async (req, res) => {
    try {
      const id = req.params.id;

      const authorsResult = await authors.findById(id);

      if(authorsResult !== null) {
        res.status(200).send(authorsResult);
      } else {
        res.status(404).send({message: "Author Not Found"});

      }
    } catch (error) {
      if(error instanceof mongoose.Error.CastError){
        res.status(400).send({message: "One or more incorrect specific data."});
      } else {
        res.status(500).send({message: "Internal Server Error."});
      }
    }  

  };

  static insertAuthor = async (req, res) => {
    try{  
      let author = new authors(req.body);

      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());
    } catch(error){
      res.status(500).send({ message: `${error.message} - Failed to insert a new author` });
    }
  };

  static updateAuthor = async (req, res) => {
    try {
      const id = req.params.id;
  
      await authors.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Successfully updated author" });
    } catch (error) {
      res.status(500).send({ message: `${error.message} - Cannot Update this Author` });
    }
  };

  static deleteAuthor = async (req, res) => {
    try {
      const id = req.params.id;

      await authors.findByIdAndDelete(id);
      
      res.status(200).send({message: "Author removed successfully"});
    } catch (error) {
      res.status(500).send({message: `${error.message} - Cannot Remove this Author`});
    }
  };
}

export default AuthorController;