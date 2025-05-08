import { model, Schema } from 'mongoose';

const courseSchema = Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
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

courseSchema.methods.toJSON = function() {
    const { __v, _id, ...course } = this.toObject();
    course.cid = _id;
    return course;
};

export default model('Course', courseSchema);