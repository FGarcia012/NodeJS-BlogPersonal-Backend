import { Router } from "express";
import { addCourse, getCourses, updateCourse, deleteCourse } from "./course.controller.js";
import { addCourseValidator, updateCourseValidator, deleteCourseValidator } from "../middlewares/course-validators.js";

const router = Router();

/**
 * @swagger
 * /courses/addCourse:
 *   post:
 *     summary: Add a new course
 *     tags: [Courses]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the course
 *     responses:
 *       201:
 *         description: Course added successfully
 *       400:
 *         description: Validation error
 *       500:
 *         description: Internal server error
 */
router.post('/addCourse', addCourseValidator, addCourse);

/**
 * @swagger
 * /courses/getCourses:
 *   get:
 *     summary: Get all courses
 *     tags: [Courses]
 *     responses:
 *       200:
 *         description: Courses fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/getCourses', getCourses);

/**
 * @swagger
 * /courses/updateCourse/{cid}:
 *   put:
 *     summary: Update a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the course to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: The updated name of the course
 *     responses:
 *       200:
 *         description: Course updated successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.put('/updateCourse/:cid', updateCourseValidator, updateCourse);

/**
 * @swagger
 * /courses/deleteCourse/{cid}:
 *   delete:
 *     summary: Delete a course
 *     tags: [Courses]
 *     parameters:
 *       - in: path
 *         name: cid
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the course to delete
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.delete('/deleteCourse/:cid', deleteCourseValidator, deleteCourse);

export default router;