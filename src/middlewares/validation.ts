import * as Joi from 'joi';

export const userValidationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(10).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
    phone: {
      ddd: Joi.number().min(11).max(99),
      number: Joi.number().required(),
    }
});

export const emailValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  receiver: Joi.string().required(),
  subject: Joi.string().required(),
  text: Joi.string().required(),
});
