import { Request, Response } from "express";
import { isPalindrome } from "../utils/palindrome.util.js";

export function checkPalindrome(req: Request, res: Response): Response {
  const { value } = req.body;

  if (typeof value !== "string") {
    return res.status(400).json({ error: "El valor debe ser un string" });
  }

  const result = isPalindrome(value);
  return res.json({ result });
}
