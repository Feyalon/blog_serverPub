import mongoose from "mongoose"

const Post = new mongoose.Schema({
    title: {type: String, required: true},
    content: {type: String, required: true},
    day: {type: Number, required: true},
    month: {type: Number, required: true},
    year: {type: Number, required: true},
    image: {type: String, required: false},
    tag: {type: String, required: true}

})
export default mongoose.model('Post', Post)