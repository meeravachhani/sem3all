const Joi = require('joi');

const songSchema = Joi.object({
  title: Joi.string().required(),
  category: Joi.string().required(),
  url: Joi.string().uri().required(),
});

module.exports = { songSchema };
