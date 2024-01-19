import customerService from "../services/customers/create.js";

const createCustomer = async (req, res, next) => {
  try {
    const result = await customerService.createCustomer(req.body);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  createCustomer,
};
