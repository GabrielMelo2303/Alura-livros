import publishingCompany from "../models/PublishingCompany.js";

class PublishingCompanyController {

  static listPublishingCompany = async (req, res, next) => {
    try {
      const publishResult = await publishingCompany.find();
     
      res.status(200).json(publishResult);
    } catch (error) {
      next(error);
    }
  };

  static listPublishingCompanyById = async (req, res, next) => {
    try {
      const id = req.params.id;
          
      const publishResult = await publishingCompany.findById(id);
    
      res.status(200).send(publishResult);
    } catch (error) {
      next(error);      
    }
  };

  static insertPublishingCompany = async (req, res, next) => {
    try {
      let publish = new publishingCompany(req.body);

      const publishResult = await publish.save();
      
      res.status(201).send(publishResult.toJSON());
    } catch (error) {
      next(error);      
    }
  };

  static updatePublishingCompany = async (req, res, next) => {
    try {
      const id = req.params.id;
  
      await publishingCompany.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Publishing Company Updated Successfully" });
    } catch (error) {
      next(error);
    }
  };

  static deletePublishingCompany = async (req, res, next) => {
    try {
      const id = req.params.id;

      await publishingCompany.findByIdAndDelete(id);

      res.status(200).send({message: "Publishing Company removed successfully"});
    } catch (error) {
      next(error);      
    }
  };
}

export default PublishingCompanyController;