import { Router } from "express";
import { addComment, getComments, updateComment, deleteComment } from "./comment.controller.js";
import { addCommentValidator, updateCommentValidator, deleteCommentValidator } from "../middlewares/comment-validators.js";

const router = Router();

/**
 * @swagger
 * /comments/addComment:
 *   post:
 *     summary: Add a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publication:
 *                 type: string
 *                 description: The ID of the publication
 *               author:
 *                 type: string
 *                 description: The author of the comment
 *               description:
 *                 type: string
 *                 description: The content of the comment
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: The date of the comment (optional)
 *     responses:
 *       201:
 *         description: Comment added successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/addComment', addCommentValidator, addComment);

/**
 * @swagger
 * /comments/getComments:
 *   get:
 *     summary: Get all comments
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Comments fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/getComments', getComments);

/**
 * @swagger
 * /comments/updateComment/{ccid}:
 *   put:
 *     summary: Update a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: ccid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the comment to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               publication:
 *                 type: string
 *                 description: The ID of the publication (optional)
 *               author:
 *                 type: string
 *                 description: The updated author of the comment (optional)
 *               description:
 *                 type: string
 *                 description: The updated content of the comment (optional)
 *               date:
 *                 type: string
 *                 format: date-time
 *                 description: The updated date of the comment (optional)
 *     responses:
 *       200:
 *         description: Comment updated successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
router.put('/updateComment/:ccid', updateCommentValidator, updateComment);

/**
 * @swagger
 * /comments/deleteComment/{ccid}:
 *   delete:
 *     summary: Delete a comment
 *     tags: [Comments]
 *     parameters:
 *       - in: path
 *         name: ccid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the comment to delete
 *     responses:
 *       200:
 *         description: Comment deleted successfully
 *       404:
 *         description: Comment not found
 *       500:
 *         description: Internal server error
 */
router.delete('/deleteComment/:ccid', deleteCommentValidator, deleteComment);

export default router;