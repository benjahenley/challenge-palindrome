import axios from "axios";
import { Entry } from "../types/entry";

export default async function checkPalindrome(value: string): Promise<Entry> {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/palindrome`,
      {
        value,
      }
    );

    const newEntry: Entry = {
      word: value,
      isPalindrome: res.data.result,
      timestamp: Date.now(),
    };

    return newEntry;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Hubo un error accediendo al servidor.",
        error.response?.data || error.message
      );
    } else {
      console.error("Hubo un error accediendo al servidor.", error);
    }
    throw new Error("Hubo un error accediendo al servidor.");
  }
}
