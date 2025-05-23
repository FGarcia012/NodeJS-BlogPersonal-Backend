'use strict'

import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'
import { dbConnection } from './mongo.js'
import courseRouter from '../src/course/course.routes.js'
import publicationRouter from '../src/publication/publication.routes.js'
import commentRouter from '../src/comment/comment.routes.js'
import apiLimiter from '../src/middlewares/rate-limit-validator.js'
import { swaggerDocs, swaggerUi } from './swagger.js'

const middlewares = (app) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors());
    app.use(helmet());
    app.use(morgan("dev"));
    app.use(apiLimiter);
};

const routes = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    app.use('/BlogPersonal/v1/courses', courseRouter)
    app.use('/BlogPersonal/v1/publications', publicationRouter)
    app.use('/BlogPersonal/v1/comments', commentRouter)
}

const conectarDB = async () => {
    try {
        await dbConnection();
    } catch (err) {
        console.log(`Database connection failed: ${err}`);
        process.exit(1);
    }
};

export const initServer = async () => {
    const app = express()
    try{
        middlewares(app)
        conectarDB()
        routes(app)
        const port = process.env.PORT || 3017
        app.listen(port, () => {
            console.log(`Server is running on port ${port} matutina`)
        })
    } catch(err){
        console.log(`Server initialization failed: ${err}`)
    }
}