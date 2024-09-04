const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const authMiddleware = require('../middleware/authMiddleware');

// Set up Cloudinary storage for multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'user_images',
    allowedFormats: ['jpg', 'png'],
  },
});

const upload = multer({ storage });

// Register route
router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    user = new User({
      name,
      email,
      password,
    });

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, 'JWT_SECRET', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, 'JWT_SECRET', { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;

      res.json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          profilePicture: user.profilePicture, // Include profile picture in response
        },
      });
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Profile picture upload route
router.post('/uploadProfilePicture', authMiddleware, upload.single('profilePicture'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ msg: 'No file uploaded' });
    }

    const user = await User.findById(req.user.id);
    user.profilePicture = req.file.path;
    await user.save();

    res.json(user);
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Fetch user profile route
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude the password
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
});


// Delete profile picture route
router.delete('/deleteProfilePicture', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user.profilePicture) {
      return res.status(400).json({ msg: 'No profile picture to delete' });
    }

    // Optionally, you can delete the image from Cloudinary
    const publicId = user.profilePicture.split('/').pop().split('.')[0];
    await cloudinary.uploader.destroy(`user_images/${publicId}`);

    // Remove the profile picture from the user document
    user.profilePicture = undefined;
    await user.save();

    res.json({ msg: 'Profile picture deleted successfully', user });
  } catch (err) {
    console.error('Server error:', err);
    res.status(500).json({ msg: 'Server error' });
  }
});


module.exports = router;
