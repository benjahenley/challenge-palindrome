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
  } catch (e: any) {
    console.error(
      "Hubo un error accediendo al servidor.",
      e?.response?.data || e.message
    );
    throw new Error("Hubo un error accediendo al servidor.");
  }
}
