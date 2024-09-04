const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String, // URL to the uploaded picture in Cloudinary
      },
    
    // Add additional fields as needed
});

module.exports = mongoose.model('User', UserSchema);


