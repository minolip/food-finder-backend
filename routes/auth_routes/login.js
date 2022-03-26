// const express = require('express');
// const { check, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const dotenv = require('dotenv').config();

// const userModel = require('../../models/user');

// const app = express();

// /**
//  * @method - POST
//  * @description - Login a User
//  * @param - /user/sign-in
//  */

// app.post(
//     "/",
//     [
//         check("email", "Please enter a valid email").isEmail(),
//         check("password", "Please enter a valid password").isLength({
//             min: 6
//         })
//     ],
//     async (request, response) => {
//         const errors = validationResult(request);

//         if (!errors.isEmpty()) {
//             return response.status(400).json({
//                 errors: errors.array()
//             });
//         }

//         const { email, password } = request.body;
//         try {
//             let user = await userModel.findOne({
//                 email
//             });
//             if (!user)
//                 return response.status(400).json({
//                     message: "User Not Exist"
//                 });

//             const isMatch = await bcrypt.compare(password, user.password);
//             if (!isMatch)
//                 return response.status(400).json({
//                     message: "Incorrect Password !"
//                 });

//             const payload = {
//                 user: {
//                     id: user.id
//                 }
//             };

//             jwt.sign(
//                 payload,
//                 process.env.SECREAT,
//                 {
//                     expiresIn: 3600
//                 },
//                 (error, token) => {
//                     if (error) throw error;
//                     response.status(200).json({
//                         token
//                     });
//                 }
//             );
//         } catch (error) {
//             console.error(error);
//             response.status(500).json({
//                 message: "Server Error"
//             });
//         }
//     });

// module.exports = app;