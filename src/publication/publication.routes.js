import { Router } from "express";
import { 
    addPublication, 
    getPublications, 
    updatePublication, 
    deletePublication,
    getPublicationsByDateRange 
} from "./publication.controller.js";
import { addPublicationValidator, updatePublicationValidator, deletePublicationValidator } from "../middlewares/publication-validators.js";

const router = Router();

/**
 * @swagger
 * /publications/addPublication:
 *   post:
 *     summary: Add a new publication
 *     tags: [Publications]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 description: The ID of the course
 *               title:
 *                 type: string
 *                 description: The title of the publication
 *               description:
 *                 type: string
 *                 description: The description of the publication
 *     responses:
 *       201:
 *         description: Publication added successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/addPublication', addPublicationValidator, addPublication);

/**
 * @swagger
 * /publications/getPublications:
 *   get:
 *     summary: Get all publications
 *     tags: [Publications]
 *     responses:
 *       200:
 *         description: Publications fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/getPublications', getPublications);

/**
 * @swagger
 * /publications/updatePublication/{pid}:
 *   put:
 *     summary: Update a publication
 *     tags: [Publications]
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the publication to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               course:
 *                 type: string
 *                 description: The ID of the course
 *               title:
 *                 type: string
 *                 description: The title of the publication
 *               description:
 *                 type: string
 *                 description: The description of the publication
 *     responses:
 *       200:
 *         description: Publication updated successfully
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Internal server error
 */
router.put('/updatePublication/:pid', updatePublicationValidator, updatePublication);

/**
 * @swagger
 * /publications/deletePublication/{pid}:
 *   delete:
 *     summary: Delete a publication
 *     tags: [Publications]
 *     parameters:
 *       - in: path
 *         name: pid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the publication to delete
 *     responses:
 *       200:
 *         description: Publication deleted successfully
 *       404:
 *         description: Publication not found
 *       500:
 *         description: Internal server error
 */
router.delete('/deletePublication/:pid', deletePublicationValidator, deletePublication);

/**
 * @swagger
 * /publications/getByDateRange:
 *   get:
 *     summary: Get publications by date range
 *     tags: [Publications]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: Start date (YYYY-MM-DD)
 *       - in: query
 *         name: endDate
 *         required: true
 *         schema:
 *           type: string
 *           format: date
 *         description: End date (YYYY-MM-DD)
 *     responses:
 *       200:
 *         description: Publications filtered successfully
 *       500:
 *         description: Internal server error
 */
router.get('/getByDateRange', getPublicationsByDateRange);

export default router;