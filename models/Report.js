const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    department: { type: String, required: true },
    description: { type: String, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Reviewed', 'Closed'],
        default: 'Pending'
    }
});

module.exports = mongoose.model('Report', reportSchema);


