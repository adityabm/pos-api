import Joi from "joi";

const createUserValidation = Joi.object({
  email: Joi.string()
    .required()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net", "id"] },
    }),
  name: Joi.string().required(),
  password: Joi.string().required(),
  customerId: Joi.number().required(),
});

const loginValidation = Joi.object({
  email: Joi.required(),
  password: Joi.required(),
});

export { createUserValidation, loginValidation };
