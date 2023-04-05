import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
function manipulateErrors (error, req, res, next) {
  if(error instanceof mongoose.Error.CastError){
    res.status(400).send({message: "One or more incorrect specific data."});
  } else {
    res.status(500).send({message: "Internal Server Error."});
  }

}

export default manipulateErrors;