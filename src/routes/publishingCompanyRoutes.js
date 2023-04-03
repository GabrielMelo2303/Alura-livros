import express from "express";
import PublishingCompanyController from "../controllers/publishingCompanyController.js";

const router = express.Router();

router
    .get("/publishingCompany", PublishingCompanyController.listPublishingCompany)
    .get("/publishingCompany/:id", PublishingCompanyController.listPublishingCompanyById)
    .post("/publishingCompany", PublishingCompanyController.insertPublishingCompany)
    .put("/publishingCompany/:id", PublishingCompanyController.updatePublishingCompany)
    .delete("/publishingCompany/:id", PublishingCompanyController.deletePublishingCompany)
    
export default router