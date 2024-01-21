import { prismaClient } from "../../app/database.js";
import { ResponseError } from "../../exceptions/exceptions.js";
import { createUserValidation } from "../../validations/user-validation.js";
import { validate } from "../../validations/validation.js";
import bcrypt from "bcrypt";

const createUser = async (request) => {
  console.log(request);
  const user = validate(createUserValidation, request);

  const isUserExists = await prismaClient.user.findFirst({
    where: {
      email: user.email,
    },
  });

  if (isUserExists) {
    throw new ResponseError(400, "Email Already Exists");
  }

  user.password = await bcrypt.hash(user.password, 10);

  return prismaClient.user.create({
    data: {
      name: user.name,
      email: user.email,
      password: user.password,
      role: "user",
      customerId: user.customerId,
    },
    select: {
      name: true,
      email: true,
      customer: true,
    },
  });
};

export default { createUser };
