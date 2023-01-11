const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(403).json({message: 'Access denied'});

        const decoded = jwt.verify(token, "secretkey");
        console.log(decoded);
        

        next();

    } catch {
        res.status(400).json({message: 'Invalid token'});
    }
}