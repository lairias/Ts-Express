import { Router } from "express";
import { getUsuarios } from "../controllers/user.controllers";

const router = Router();

router.get("/", getUsuarios);

export default router;