import * as Joi from 'joi';

const validationSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(10).required(),
  email: Joi.string().email(),
});

export { validationSchema };
