import jwt from "jsonwebtoken";

export const authMiddleware = async (req, res, next) => {
  let tokenHeader = req.headers["authorization"];

  if (!tokenHeader) {
    return res.status(401).send({
      message: "Error",
      errors: "No Authenticated.",
    });
  }

  if (tokenHeader.split(" ")[0] !== "Bearer") {
    return res.status(500).send({
      message: "Error",
      errors: "Incorrect token format",
    });
  }

  let token = tokenHeader.split(" ")[1];

  if (!token) {
    return res.status(403).send({
      message: "Error",
      errors: "No token provided",
    });
  }

  jwt.verify(token, "POS-TOKENBB0205!.", (err, decoded) => {
    if (err) {
      return res.status(500).send({
        message: "Error",
        errors: err,
      });
    }
    req.email = decoded.email;
    next();
  });
};
