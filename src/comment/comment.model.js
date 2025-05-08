import { model, Schema } from 'mongoose';

const commentSchema = Schema({
    publication: {
        type: Schema.Types.ObjectId,
        ref: 'Publication',
        required: [true, 'Publication is required']
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: Boolean,
        default: true
    }
},
{
    versionKey: false,
    timestamps: true
});

commentSchema.methods.toJSON = function() {
    const { __v, _id, ...comment } = this.toObject();
    comment.ccid = _id;
    return comment;
};

export default model('Comment', commentSchema);