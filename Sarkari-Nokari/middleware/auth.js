const jwt = require("jsonwebtoken");

const verifyAdmin = (req, res, next) => {

  if (!process.env.JWT_SECRET) {
    throw new Error(
      "JWT_SECRET not set in .env — server cannot start"
    );
  }

  const SECRET = process.env.JWT_SECRET;
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "No token",
    });
  }

  const token = authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Invalid token format",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        message: "Access denied",
      });
    }

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
};

module.exports = {
  verifyAdmin,
};