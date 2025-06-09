//authMiddleware.js

function authMiddleware(req, res, next) {
    if (!req.session || !req.session.isAuthenticated) {
        return res.status(401).redirect('/products');
    }
    next();
}

function authApiMiddleware(req, res, next) {
const key = req.headers['x-api-key'];
  if (key === process.env.API_KEY) {
    next();
  } else {
    res.status(403).json({ message: 'No autorizado' });
  }
}

module.exports = {authMiddleware, authApiMiddleware};