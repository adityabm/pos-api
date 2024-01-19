import Joi from "joi";

const createCustomerValidation = Joi.object({
  name: Joi.string().required(),
});

export { createCustomerValidation };
