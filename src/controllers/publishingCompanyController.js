import publishingCompany from "../models/PublishingCompany.js";

class PublishingCompanyController {

  static listPublishingCompany = async (req, res) => {
    try {
      const publishResult = await publishingCompany.find();
     
      res.status(200).json(publishResult);
    } catch (error) {
      res.status(500).json({message: "Internal Server Error"});
    }
  };

  static listPublishingCompanyById = async (req, res) => {
    try {
      const id = req.params.id;
          
      const publishResult = await publishingCompany.findById(id);
    
      res.status(200).send(publishResult);
    } catch (error) {
      res.status(400).send({ message: `${error} - Publishing Company not Found` });
      
    }
  };

  static insertPublishingCompany = async (req, res) => {
    try {
      let publish = new publishingCompany(req.body);

      const publishResult = await publish.save();
      
      res.status(201).send(publishResult.toJSON());
    } catch (error) {
      res.status(500).send({ message: `${error.message} - Failed to insert a new Publishing Company` });
      
    }
  };

  static updatePublishingCompany = async (req, res) => {
    try {
      const id = req.params.id;
  
      await publishingCompany.findByIdAndUpdate(id, { $set: req.body });

      res.status(200).send({ message: "Publishing Company Updated Successfully" });
    } catch (error) {
      res.status(500).send({ message: `${error.message} - Cannot Update this Publishing Company`});
    }
  };

  static deletePublishingCompany = async (req, res) => {
    try {
      const id = req.params.id;

      await publishingCompany.findByIdAndDelete(id);

      res.status(200).send({message: "Publishing Company removed successfully"});
    } catch (error) {
      res.status(500).send({message: `${error.message} - Cannot Remove this Publishing Company`});
      
    }
  };
}

export default PublishingCompanyController;