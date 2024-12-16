// Get user model
import User from "../models/userModel.js";

// Get asyncHandler
import asyncHandler from "../middlewares/asyncHandler.js";

// Start creating User
const createUser = asyncHandler(async (req, res) => {
  res.send("Hello");
});

export { createUser };
