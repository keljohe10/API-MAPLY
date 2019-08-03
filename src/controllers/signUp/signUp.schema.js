const joi = require('joi');

const schema = {
    body: {
        email: joi.string().email().required().description('Email personal medico'),       
        password: joi.string().required(),
    }
};

module.exports = { schema };