const { Joi, validateBody } = require('express-joi-validations');
const { register } = require('./controller');

const validaciones = {
    post: Joi.object({
        nombre: Joi.string().required(),
        template: Joi.string().required(),
        items: Joi.array().required().items(
            Joi.object({
                id: Joi.number().required(),    
                titulo: Joi.string().required(),
                precio: Joi.number().required(),
                descripcion: Joi.string().required(),
                foto: Joi.string().allow('')
            })
        )
    }),
    
    register: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required()
    }),

    alta: Joi.object({
        username: Joi.string().required(),
        password: Joi.string().required(),
        nombre: Joi.string().required(),
        apellidos: Joi.string().required(),
        email: Joi.string().email().required()
    })
}

module.exports = validaciones;