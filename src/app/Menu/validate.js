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
        ),
        idUsuario: Joi.number().required()
    }),
    menu: Joi.object({
        id: Joi.number().allow(null),
        nombre: Joi.string().required(),
        template: Joi.string().required().allow(null),
        idUsuario: Joi.number().required()
    }),
    items: Joi.object({
        items: Joi.array()
            .items(
                Joi.object({
                    id: Joi.number().allow(null).required(),
                    titulo: Joi.string().required(),
                    precio: Joi.number().required(),
                    descripcion: Joi.string().required(),
                    foto: Joi.string().allow(null),
                    idMenu: Joi.number().allow(null).required(),
                    createdAt: Joi.allow(null),
                    updatedAt: Joi.allow(null)
                })
            )
            .required()
    })
}

module.exports = validaciones;