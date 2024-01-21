import createService from "../services/users/create.js";
import loginService from "../services/users/login.js";

const createUser = async (req, res, next) => {
  try {
    const result = await createService.createUser(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

const login = async (req, res, next) => {
  try {
    const result = await loginService.login(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createUser,
  login,
};
