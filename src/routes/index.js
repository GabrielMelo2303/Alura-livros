import express from "express" ;
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";
import publishingCompany from "./publishingCompanyRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send({title: "Curso de Node"});
  });

  app.use(
    express.json(),
    books,
    authors,
    publishingCompany
  );

};

export default routes;