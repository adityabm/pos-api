import userService from "../services/users/create.js";

const createUser = async (req, res, next) => {
  try {
    const result = await userService.createUser(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createUser,
};
