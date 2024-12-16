// Import packages
import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utils
// console.log('Importing connectDB from:', './config/db.js');
import { connectDB } from "./config/db.js";

// Get userRoutes
import userRoutes from "./routes/userRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Create an instance of an Express application
const app = express();

// Set the port number from environment variables or default to 5000
const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Middleware to parse cookies
app.use(cookieParser());

// Define api
app.use("/api/users", userRoutes);

// Start the server and listen on the specified port
app.listen(port, () => console.log(`Server running on port: ${port}`));
