const { Joi } = require('express-joi-validations');

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        console.log(error)
        return error ? res.status(400).send(error) : next();
    }
}

module.exports = validateRequest;