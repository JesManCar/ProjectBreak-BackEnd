//authMiddleware.js

function authMiddleware(req, res, next) {
    if (!req.session || !req.session.isAuthenticated) {
        return res.status(401).redirect('/products');
    }
    next();
}

module.exports = authMiddleware;