const { Joi, validateBody } = require('express-joi-validations');

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
    })
    
}

module.exports = validaciones;