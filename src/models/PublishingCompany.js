import mongoose from "mongoose";
// Finalizar o Publishing Company
const publishingCompanySchema = new mongoose.Schema(
    {
        id: {type: String},
        name: {type: String, required: true},
        cnpj: {type: String, required: true}
    },
    {
        versionKey: false // version of data
    }
)

const publishingCompany = mongoose.model("publishingCompany", publishingCompanySchema)

export default publishingCompany