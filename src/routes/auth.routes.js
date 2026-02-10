import {Router} from "express";

import {registerUser} from "../controllers/auth.controller.js"

const router = Router();

router.route("/resister").post(registerUser);

export default router; 