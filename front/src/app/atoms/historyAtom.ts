import { atomWithStorage } from "jotai/utils";

export interface HistoryEntry {
  word: string;
  isPalindrome: boolean;
  timestamp: number;
}

export const historyAtom = atomWithStorage<HistoryEntry[]>("history", []);
