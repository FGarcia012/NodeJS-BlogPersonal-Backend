import { body, param } from 'express-validator';
import { publicationExists, courseExists } from '../helpers/db-validators.js';
import { validateField } from './validate-field.js';
import { handleErrors } from './handle-errors.js';

export const addPublicationValidator = [
    body('course')
        .notEmpty().withMessage('Course is required')
        .isMongoId().withMessage('Invalid course ID')
        .custom(courseExists),
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('date').optional().isISO8601().withMessage('Invalid date format'),
    validateField,
    handleErrors
];

export const updatePublicationValidator = [
    param('pid')
        .notEmpty().withMessage('Invalid publication ID')
        .custom(publicationExists),
    body('course')
        .optional()
        .isMongoId().withMessage('Invalid course ID')
        .custom(courseExists),
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('description').optional().notEmpty().withMessage('Description is required'),
    body('date').optional().isISO8601().withMessage('Invalid date format'),
    validateField,
    handleErrors
];

export const deletePublicationValidator = [
    param('pid').notEmpty().withMessage('Invalid publication ID'),
    param('pid').custom(publicationExists),
    validateField,
    handleErrors
];