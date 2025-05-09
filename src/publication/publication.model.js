import { model, Schema } from 'mongoose';

const publicationSchema = Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'Course',
        required: [true, 'Course is required']
    },
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        }
    ],
    status: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true
})

publicationSchema.methods.toJSON = function() {
    const { __v, _id, ...publication } = this.toObject();
    publication.pid = _id;
    return publication;
};

export default model('Publication', publicationSchema);