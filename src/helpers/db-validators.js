import Course from '../course/course.model.js'; 
import Publication from '../publication/publication.model.js'; 
import Comment from '../comment/comment.model.js'; 

export const courseExists = async (cid = ' ') => {
    const existe = await Course.findById(cid);
    if (!existe) {
        throw new Error('The course with the provided ID does not exist.');
    }
};

export const publicationExists = async (pid = ' ') => {
    const existe = await Publication.findById(pid);
    if (!existe) {
        throw new Error('The publication with the provided ID does not exist.');
    }
};

export const commentExists = async (ccid = ' ') => {
    const existe = await Comment.findById(ccid);
    if (!existe) {
        throw new Error('The comment with the provided ID does not exist.');
    }
};
