import { body, param } from 'express-validator';
import { commentExists, publicationExists } from '../helpers/db-validators.js';
import { validateField } from './validate-field.js';
import { handleErrors } from './handle-errors.js';

export const addCommentValidator = [
    body('publication')
        .notEmpty().withMessage('Publication is required')
        .isMongoId().withMessage('Invalid publication ID')
        .custom(publicationExists),
    body('author').notEmpty().withMessage('Author is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('date').optional().isISO8601().withMessage('Invalid date format'),
    validateField,
    handleErrors
];

export const updateCommentValidator = [
    param('ccid')
        .notEmpty().withMessage('Invalid comment ID')
        .custom(commentExists), 
    body('publication')
        .optional()
        .isMongoId().withMessage('Invalid publication ID')
        .custom(publicationExists),
    body('author').optional().notEmpty().withMessage('Author is required'),
    body('description').optional().notEmpty().withMessage('Description is required'),
    body('date').optional().isISO8601().withMessage('Invalid date format'),
    validateField,
    handleErrors
];

export const deleteCommentValidator = [
    param('ccid').notEmpty().withMessage('Invalid comment ID'),
    param('ccid').custom(commentExists),
    validateField,
    handleErrors
];