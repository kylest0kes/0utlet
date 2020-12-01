import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    author: String,
    dateCreated: {
        type: Date,
        default: new Date()
    },
    likes: {
        type: Number,
        default: 0
    }
});

const Post = mongoose.model('Post', postSchema);

export default Post;