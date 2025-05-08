import Comment from './comment.model.js'

export const addComment = async (req, res) => {
    try {

        const data = req.body

        const comment = await Comment.create(data)

        return res.status(201).json({
            success: true,
            message: 'Comment added successfully',
            comment
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Error adding comment',
            error: err.message
        })
    }
}

export const getComments = async (req, res) => {
    try {
        const comments = await Comment.find({ status: true })

        return res.status(200).json({
            success: true,
            message: 'Comments fetched successfully',
            comments
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Error fetching comments',
            error: err.message
        })
    }
}

export const updateComment = async (req, res) => {
    try {
        const { ccid } = req.params
        const data = req.body

        const comment = await Comment.findByIdAndUpdate(ccid, data, {
            new: true
        })

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found'
            })
        }


        return res.status(200).json({
            success: true,
            message: 'Comment updated successfully',
            comment
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Error updating comment',
            error: err.message
        })

    }
}

export const deleteComment = async (req, res) => {
    try {
        const { ccid } = req.params
        const comment = await Comment.findByIdAndUpdate(ccid, {
            status: false
        }, { new: true })

        if (!comment) {
            return res.status(404).json({
                success: false,
                message: 'Comment not found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Comment deleted successfully',
            comment
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Error deleting comment',
            error: err.message
        })
    }
}