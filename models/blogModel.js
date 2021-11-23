const mongoose = require('../connection');

const schema = mongoose.Schema({
    title: String,
    desc: String,
    author: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date,
    thumb: String,
    data: Object,
    likes: Number,
    comments: [{ type: mongoose.Types.ObjectId, ref: 'Comments' }],
    tags: Array
})


const model = mongoose.model('Blogs', schema);

module.exports = model;