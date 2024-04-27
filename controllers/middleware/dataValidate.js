const expresValidator = require('express-validator');


function dataValidate = (req, res, next) => {
    const errors = expresValidator.validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

module.exports = dataValidate;