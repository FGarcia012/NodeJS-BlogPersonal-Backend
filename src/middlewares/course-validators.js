import { body, param } from 'express-validator';
import { courseExists } from '../helpers/db-validators.js';
import { validateField } from './validate-field.js';
import { handleErrors } from './handle-errors.js';

export const addCourseValidator = [
    body('name').notEmpty().withMessage('Name is required'),
    validateField,
    handleErrors
];

export const updateCourseValidator = [
    param('cid').notEmpty().withMessage('Invalid course ID'),
    param('cid').custom(courseExists),
    body('name').optional().notEmpty().withMessage('Name is required'),
    validateField,
    handleErrors
];

export const deleteCourseValidator = [
    param('cid').notEmpty().withMessage('Invalid course ID'),
    param('cid').custom(courseExists),
    validateField,
    handleErrors
];