import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const option = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog Persona API',
            version: '1.0.0',
            description: 'API para blog persona',
            contact: {
                name: 'Fredy Alexander García Sicajau',
                email: 'alexander.garcia.sicajau@gmail.com'
            }
        },
        servers: [
            {
                url: 'http://127.0.0.1:3017/BlogPersonal/v1',

            },
        ],
    },
    apis: [
        './src/course/course.routes.js',
        './src/publication/publication.routes.js',
        './src/comment/comment.routes.js'
    ]
};

const swaggerDocs = swaggerJSDoc(option);

export { swaggerDocs, swaggerUi };