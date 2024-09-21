const { JWT_SECRET } = require("./config");
const { jwtVerify } = require('@panva/jose');

const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const token = authHeader.split(' ')[1];

    try {
        const { payload } = await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
        req.userId = payload.userId;

        next();
    } catch (err) {
        return res.status(403).json({});
    }
};

module.exports = {
    authMiddleware
};
