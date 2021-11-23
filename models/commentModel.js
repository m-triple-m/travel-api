const mongoose = require('../connection');

const schema = mongoose.Schema({
    text: String,
    user: { type: mongoose.Types.ObjectId, ref: 'Users' },
    created: Date
})


const model = mongoose.model('Comments', schema);

module.exports = model;