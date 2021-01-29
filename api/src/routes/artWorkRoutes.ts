import express from 'express'
import {
  addArtWork,
  getArtWorks,
  // getArtWorksWithAttributes,
} from "../controller/ArtWorkController";

const artWorkRoutes = (app: express.Application) => {
    app.route('/art-works')
    .get((req, res, next) => {
        console.log(`GET Request from: ${req.originalUrl}`)
        console.log(`GET Request type: ${req.method}`)
        next();
    }, getArtWorks)
    
    app.route('/art-works')
    .post((req, res, next) => {
        console.log(`POST Request from: ${req.originalUrl}`)
        console.log(`POST Request type: ${req.method}`)
        next();
    }, addArtWork)

    
}

export default artWorkRoutes;