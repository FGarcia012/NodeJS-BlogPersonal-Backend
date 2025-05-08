import { Router } from "express";
import { addCourse, getCourses, updateCourse, deleteCourse } from "./course.controller.js";
import { addCourseValidator, updateCourseValidator, deleteCourseValidator } from "../middlewares/course-validators.js";

const router = Router();

router.post('/addCourse', addCourseValidator, addCourse);
router.get('/getCourses', getCourses);
router.put('/updateCourse/:cid', updateCourseValidator, updateCourse);
router.delete('/deleteCourse/:cid', deleteCourseValidator, deleteCourse);

export default router;