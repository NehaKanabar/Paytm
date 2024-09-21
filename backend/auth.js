const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require("./config");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if the authorization header is missing or malformed
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({ message: 'Missing or invalid authorization header' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token from the header

    try {
        // Verify the token using jwt.verify
        const decoded = jwt.verify(token, JWT_SECRET); 
        
        // Assuming the JWT payload contains a userId field
        req.userId = decoded.userId;

        next(); // Pass to the next middleware or route handler
    } catch (err) {
        // If the token is invalid or expired, return a 403 response
        return res.status(403).json({ message: 'Invalid or expired token' });
    }
};

module.exports = {
    authMiddleware
};
