// // How user will look like
// // Requirements which user should have
// import { Timestamp } from "mongodb";
// import mongoose from "mongoose";

// const userSchema = mongoose.Schema(
//   {
//     username: {
//       type: String,
//       required: true,
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//     },

//     password: {
//       type: String,
//       required: true,
//     },

//     isAdmin: {
//       type: Boolean,
//       required: true,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// // Create a User based on model
// const User = mongoose.model("User", userSchema);

// export default User;

import { DataTypes } from "sequelize"; // Import DataTypes from Sequelize

import { sequelize } from "../config/db.js"; // Import the sequelize instance

// Define the User model
const User = sequelize.define(
  "User",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false, // Not null constraint
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true, // Ensures email is unique
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false, // Password is required
    },

    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false, // Default is false for isAdmin
    },
  },
  {
    timestamps: true, // Sequelize will automatically add createdAt and updatedAt
  }
);

export default User;
