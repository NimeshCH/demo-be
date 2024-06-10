import Joi from "joi";

export const verificationCodeSchema = Joi.object({
  code: Joi.number().required().messages({
    "number.base": "code must be a number!",
    "any.required": "code is required!",
  }),
});
