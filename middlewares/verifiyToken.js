// import le dependances jwt 
const jwt = require('jsonwebtoken');

// devenir un mecanisme d'authentification pour les utilisateurs
function verifiyToken(req, res, next) {
    const token = req.headers('Authorization')?.split(' ')[1];
    if (!token) 
        return res.status(401).send('Access Denied');
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.sendStatus(401);
        }
        req.user = user;
        next();
    });
}

// exporter le module de verification
module.exports = verifiyToken;