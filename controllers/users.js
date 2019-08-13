const Joi = require('joi');
const createError = require('http-errors');

const bcrypt = require('../helpers/bcrypt');
const User = require('../models/User');

module.exports = {
    login: async function (req, res, next) {
        const schema = Joi.object().keys({
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            password: Joi.string().min(8).max(40).required(),
            role: Joi.array().min(1).items(
                Joi.string()
            ).required()
        });
        try {
            const { error, value } = Joi.validate(req.body, schema);
            if (error)
                throw error;

            const user = await User.query()
                .where({ email: value.email })
                .whereIn('role', value.role).first();
            if (!user || !bcrypt.compare(value.password, user.password))
                throw messages.INCORRECT_EMAIL_OR_PASSWORD;

            res.responseHandler(user);
        } catch (err) {
            return next(createError(423, err));
        }
    },

    signUP: async function (req, res, next) {
        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            phone: Joi.string().required(),
            password: Joi.string().min(8).max(40).required(),
            role: Joi.string().required()
        }).unknown();
        try{
            const {firstName, lastName, email, phone, password, role} = req.body;
        } catch (err) {

        }
    }
};