import { prismaClient } from "../../app/database.js";
import { ResponseError } from "../../exceptions/exceptions.js";
import { loginValidation } from "../../validations/user-validation.js";
import { validate } from "../../validations/validation.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (request) => {
  const loginRequest = validate(loginValidation, request);

  const user = await prismaClient.user.findFirst({
    where: {
      email: request.email,
    },
  });

  if (!user) {
    throw new ResponseError(404, "No User Found.");
  }

  const passwordValidation = await bcrypt.compare(
    loginRequest.password,
    user.password
  );
  if (!passwordValidation) {
    throw new ResponseError(401, "Email or Password wrong.");
  }

  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
      name: user.name,
    },
    "POS-TOKENBB0205!.",
    {
      expiresIn: 86400, //24h expired
    }
  );

  return {
    name: user.name,
    email: user.email,
    role: user.role,
    accessToken: token,
  };
};

export default { login };
