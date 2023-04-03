import publishingCompany from "../models/PublishingCompany.js"

class PublishingCompanyController {

    static listPublishingCompany = (req, res) => {
        publishingCompany.find((err, publishingCompany) => {
            res.status(200).json(publishingCompany);
        })
    }

    static listPublishingCompanyById = (req, res) => {
        const id = req.params.id
        
        publishingCompany.findById(id, (err, publishingCompany) => {
            if (err) {
                res.status(400).send({ message: `${err} - Publishing Company not Found` })
            } else {
                res.status(200).send(publishingCompany);
            }
        })
    }

    static insertPublishingCompany = (req, res) => {
        let publishingCompany = new publishingCompany(req.body);
        publishingCompany.save((err) => {
            if (err) {
                res.status(500).send({ message: `${err.message} - Failed to insert a new Publishing Company` })
            } else {
                res.status(201).send(publishingCompany.toJSON())
            }
        })
    }

    static updatePublishingCompany = (req, res) => {
        const id = req.params.id;

        publishingCompany.findByIdAndUpdate(id, { $set: req.body }, (err) => {
            if (!err) {
                res.status(200).send({ message: 'Successfully updated Publishing Company' })
            } else {
                res.status(500).send({ message: err.message })
            }
        })
    }

    static deletePublishingCompany = (req, res) => {
        const id = req.params.id;
        publishingCompany.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Publishing Company removed successfully'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

export default PublishingCompanyController;