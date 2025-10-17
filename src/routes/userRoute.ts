import { Router } from "express";
import { getMe } from "../controller/userController";
const router = Router();


/// router
router.get('/me', getMe);
export default router;
