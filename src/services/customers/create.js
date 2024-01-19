import { prismaClient } from "../../app/database.js";
import { ResponseError } from "../../exceptions/exceptions.js";
import { createCustomerValidation } from "../../validations/customer-validation.js";
import { validate } from "../../validations/validation.js";

const createCustomer = async (request) => {
  const customer = validate(createCustomerValidation, request);

  return prismaClient.customer.create({
    data: {
      name: customer.name,
    },
    select: {
      name: true,
    },
  });
};

export default { createCustomer };
