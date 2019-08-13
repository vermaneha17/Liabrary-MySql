const Joi = require('joi');
const createError = require('http-errors');
const { raw } = require('objection');

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
               // .eager('[author, customer]');

            if (!user || !bcrypt.compare(value.password, user.password)) 
                throw messages.INCORRECT_EMAIL_OR_PASSWORD;
          
            res.responseHandler(user);
        } catch (err) {
            return next(createError(423, err));
        }
    },

    signUp: async function (req, res, next) {
        const schema = Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email({ minDomainAtoms: 2 }).required(),
            phone: Joi.string().required(),
            password: Joi.string().min(8).max(40).required(),
            role: Joi.string().required()
        }).unknown();
        try{
            const { email, role } = req.body;
            Joi.validate(req.body, schema)
                .then(() => {
                    return User.query.findOne(raw(`role = '${role}'AND email = '${email}'`));
                })
                .then( user => {
                    if( user )
                        return next(createError(426, ALREADY_REGISTERED));
                    return User.query.insert(firstName, lastName, email, phone, password, role );
                })
        } catch (err) {

        }
    }
};