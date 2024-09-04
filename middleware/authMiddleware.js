const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    // Get the token from the header
    const token = req.header('Authorization').replace('Bearer ', '');

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, 'JWT_SECRET');
        req.user = decoded.user; // Attach the user to the request object
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = authMiddleware;
