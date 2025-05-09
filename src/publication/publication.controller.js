import Publication from './publication.model.js'

export const addPublication = async (req, res) => {
    try {

        const data = req.body

        const publication = await Publication.create(data)

        return res.status(201).json({
            success: true,
            message: 'Publication added successfully',
            publication
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Error adding publication',
            error: err.message
        })
    }
}

export const getPublications = async (req, res) => {
    try {
        const publications = await Publication.find({ status: true })
            .populate('course', 'name') 
            .populate({
                path: 'comments', 
                match: { status: true }, 
                select: 'author description date' 
            });

        return res.status(200).json({
            success: true,
            message: 'Publications fetched successfully',
            publications
        });
    } catch (err) {
        return res.status(500).json({
            message: 'Error fetching publications',
            error: err.message
        });
    }
}

export const updatePublication = async (req, res) => {
    try {
        const { pid } = req.params
        const data = req.body

        const publication = await Publication.findByIdAndUpdate(pid, data, {
            new: true
        })

        if (!publication) {
            return res.status(404).json({
                success: false,
                message: 'Publication not found'
            })
        }


        return res.status(200).json({
            success: true,
            message: 'Publication updated successfully',
            publication
        })

    } catch (err) {
        return res.status(500).json({
            message: 'Error updating publication',
            error: err.message
        })

    }
}

export const deletePublication = async (req, res) => {
    try {
        const { pid } = req.params
        const publication = await Publication.findByIdAndUpdate(pid, {
            status: false
        }, { new: true })

        if (!publication) {
            return res.status(404).json({
                success: false,
                message: 'Publication not found'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'Publication deleted successfully',
            publication
        })
    } catch (err) {
        return res.status(500).json({
            message: 'Error deleting publication',
            error: err.message
        })
    }
}