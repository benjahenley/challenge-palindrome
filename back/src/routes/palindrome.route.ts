import { RequestHandler, Router } from "express";
import { checkPalindrome } from "../controllers/palindrome.controller.js";

const router = Router();

router.post("/palindrome", checkPalindrome as unknown as RequestHandler);

export default router;
