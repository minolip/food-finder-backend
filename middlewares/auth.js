// const jwt = require('jsonwebtoken');
// const dotenv = require('dotenv').config();

// const logged_user = function(request, response, next) {
//   const token = request.header("token");
//   if (!token) return response.status(401).json({ message: "Auth Error" });

//   try {
//     const decoded = jwt.verify(token, process.env.SECREAT);
//     request.user = decoded.user;
//     next();
//   } catch (error) {
//     console.error(error);
//     response.status(500).send({ message: "Invalid Token" });
//   }
// };

// module.exports = logged_user;