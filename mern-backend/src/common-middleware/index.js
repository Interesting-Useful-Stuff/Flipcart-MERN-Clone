const jwt = require("jsonwebtoken");

exports.requireSignin = (req, res, next) => {
    const token = req.headers.autherization.split(" ")[1];
    const user = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = user;
    next();
};