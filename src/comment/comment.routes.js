import { Router } from "express";
import { addComment, getComments, updateComment, deleteComment } from "./comment.controller.js";
import { addCommentValidator, updateCommentValidator, deleteCommentValidator } from "../middlewares/comment-validators.js";

const router = Router();

router.post('/addComment', addCommentValidator, addComment);
router.get('/getComments', getComments);
router.put('/updateComment/:ccid', updateCommentValidator, updateComment);
router.delete('/deleteComment/:ccid', deleteCommentValidator, deleteComment);

export default router;