import express from "express"
import {registerStudent} from "../Controllers/StudentConstrollers.js";

const router = express.Router();

router.post("/register",registerStudent);

export default router;
