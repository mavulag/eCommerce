// Get user model
import User from "../models/userModel";

// Get asyncHandler
import asyncHandler from "../middlewares/asyncHandler";

// Start creating User
const createUser = asyncHandler(async (req, res) => {
  res.send("Hello");
});

export { createUser };
