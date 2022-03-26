const express = require('express');

//model
const userModel = require('../models/user');

//middleware
const auth = require('../middlewares/auth');

//route
const loginRoute = require('./auth_routes/login');
const registerRoute = require('./auth_routes/register');

const app = express();

/**
 * @method - POST
 * @description - Register a new User
 * @param - /user/sign-up
 */
app
  .post('/', function () { })
  .use('/sign-up', registerRoute);

/**
 * @method - POST
 * @description - LogIn a User
 * @param - /user/sign-in
 */
app
  .post('/', function () { })
  .use('/sign-in', loginRoute);

/**
 * @method - GET
 * @description - Get LoggedIn User
 * @param - /user/me
 */
app.get("/me", auth, async (request, response) => {
  try {
    // request.user is getting fetched from Middleware after token authentication
    const user = await userModel.findById(request.user.id);
    response.json(user);
  } catch (error) {
    response.send({ message: "Error in Fetching user" });
  }
});

/**
 * @method - GET
 * @description - Get all users in the platform
 * @param - /user/all
 */
app.get("/all", async (request, response) => {
  const users = await userModel.find({});
  try {
    response.status(200).json({
      users: users
    });
  } catch (error) {
    response.status(500).json({
      message: error.message
    });
  }
});

module.exports = app;