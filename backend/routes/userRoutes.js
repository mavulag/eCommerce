// Import dependences
import express from "express";

// Get userCreate controller
import { createUser } from "../controllers/userController";

//
const router = express.Router();

// User toutes
router.route("/").post(createUser);

//
export default router;
