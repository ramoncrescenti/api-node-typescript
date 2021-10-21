import * as Joi from 'joi';

export const userValidationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(10).required(),
  email: Joi.string().email(),
});

export const emailValidationSchema = Joi.object({
  email: Joi.string().email().required(),
  receiver: Joi.string().required(),
  subject: Joi.string().required(),
  text: Joi.string().required(),
});
