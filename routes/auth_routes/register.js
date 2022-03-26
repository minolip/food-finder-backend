// const express = require('express');
// const { check, validationResult } = require('express-validator');
// const bcrypt = require('bcryptjs');
// const jwt = require("jsonwebtoken");
// const dotenv = require('dotenv').config();

// const userModel = require('../../models/user');

// const app = express();

// /**
//  * @method - POST
//  * @description - Register a new User
//  * @param - /user/sign-up
//  */

// app.post(
//     "/",
//     [
//         check("name", "Please Enter a Valid Username")
//             .not()
//             .isEmpty(),
//         check("email", "Please enter a valid email").isEmail(),
//         check("password", "Please enter a valid password").isLength({
//             min: 6
//         })
//     ], async (request, response) => {
//         const errors = validationResult(request);
//         if (!errors.isEmpty()) {
//             return response.status(400).json({
//                 errors: errors.array()
//             });
//         }

//         const {
//             name,
//             email,
//             password
//         } = request.body;
//         try {
//             let user = await userModel.findOne({
//                 email
//             });
//             if (user) {
//                 return response.status(400).json({
//                     message: "User Already Exists"
//                 });
//             }

//             user = new userModel({ name, email, password });

//             const salt = await bcrypt.genSalt(10);
//             user.password = await bcrypt.hash(password, salt);

//             await user.save();

//             const payload = {
//                 user: {
//                     id: user.id
//                 }
//             };

//             jwt.sign(
//                 payload,
//                 process.env.SECREAT, {
//                 expiresIn: 10000
//             },
//                 (error, token) => {
//                     if (error) throw error;
//                     response.status(200).json({
//                         token
//                     });
//                 }
//             );
//         } catch (error) {
//             console.log(error.message);
//             response.status(500).json({
//                 message: "Error in Saving"
//             });
//         }
//     });

// module.exports = app;
