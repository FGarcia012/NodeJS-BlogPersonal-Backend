import Course from './course.model.js'

export const addCourse = async (req, res) => {
    try {

        const data = req.body

        const course = await Course.create(data)

        return res.status(201).json({
            success: true,
            message: 'Course added successfully',
            course
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Error adding course',
            error: err.message
        })
    }
}

export const getCourses = async (req, res) => {
    try {
        const courses = await Course.find({ status: true }); 

        return res.status(200).json({
            success: true,
            message: 'Courses fetched successfully',
            courses
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error fetching courses',
            error: err.message
        });
    }
};

export const updateCourse = async (req, res) => {
    try {
        const { cid } = req.params
        const data = req.body

        const course = await Course.findByIdAndUpdate(cid, data, {
            new: true
        })

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            })
        }


        return res.status(200).json({
            success: true,
            message: 'Course updated successfully',
            course
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Error updating course',
            error: err.message
        })

    }
}

export const deleteCourse = async (req, res) => {
    try {
        const { cid } = req.params
        const course = await Course.findByIdAndUpdate(cid, {
            status: false
        }, { new: true })

        if (!course) {
            return res.status(404).json({
                success: false,
                message: 'Course not found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Course deleted successfully',
            course
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Error deleting course',
            error: err.message
        })
    }
}