"use client";

import MainLayout from "@/app/components/layout/MainLayout";
import HomeTitle from "@/app/components/ui/Title";
import Input from "@/app/components/ui/Input";
import Button from "@/app/components/ui/SendButton";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import { FaQuestionCircle } from "react-icons/fa";
import { HelpTooltip } from "../HelpTooltip";
import checkPalindrome from "@/app/services/checkPalindrome";
import ErrorMessage from "../Error";
import { useAtom } from "jotai";
import { historyAtom } from "@/app/atoms/historyAtom";
import { Entry } from "@/app/types/entry";
import EntryContainer from "../EntryContainer";
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function PalindromeChecker() {
  const [value, setValue] = useState("");
  const [help, setHelp] = useState(false);
  const [error, setError] = useState("");
  const [, setHistory] = useAtom<Entry[] | []>(historyAtom);

  const [words, setWords] = useState<Entry[] | []>([]);

  const { pending } = useFormStatus();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedValue = value.trim();
    if (!trimmedValue) return;

    try {
      const newEntry: Entry = await checkPalindrome(value);

      setHistory((history) => [...history, newEntry]);
      setWords((words) => [...words, newEntry]);
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An unknown error occurred";
      setError(errorMessage);
    }

    setValue("");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    setValue(e.target.value);
  };

  return (
    <MainLayout>
      <div className="flex flex-col h-full w-full justify-between">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 h-fit mt-10 md:mt-20">
          <HomeTitle>Palindromium</HomeTitle>
          {words.length === 0 && (
            <FaQuestionCircle
              title="What is a palindrome?"
              className="text-gray-400 cursor-pointer w-5 h-5 mt-2 transition-all hover:text-gray-600"
              onMouseEnter={() => setHelp(true)}
              onMouseLeave={() => setHelp(false)}
            />
          )}
        </div>

        {help && words.length === 0 && <HelpTooltip />}
        {words.length > 0 && (
          <EntryContainer entries={words} className="max-h-[40vh] md:px-6" />
        )}
        <div>
          {error !== "" && <ErrorMessage message={error} />}
          <form
            className="flex flex-col items-center justify-between gap-5"
            onSubmit={handleSubmit}>
            <div className="w-full flex flex-row py-5 md:py-10 gap-2 items-center justify-between">
              <Input
                placeholder="Type here..."
                value={value}
                type="text"
                name="text"
                maxLength={100}
                onChange={(e) => handleChange(e)}
              />

              <Button
                className={value.length === 0 ? "opacity-50" : ""}
                type="submit"
                disabled={pending || value.trim().length === 0}>
                <IoIosArrowDroprightCircle className=" w-14 h-14 rounded-full text-gray-800  dark:text-slate-400" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
