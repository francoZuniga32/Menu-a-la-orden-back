const { Joi } = require('express-joi-validations');

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        return error ? res.status(400).send(error) : next();
    }
}

module.exports = validateRequest;