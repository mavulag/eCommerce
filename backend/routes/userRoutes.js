// Import dependences
import express from "express";

//
const router = express.Router();

// User toutes
router.route("/").post(createUser);

//
export default router;
