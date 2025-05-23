"use client";

import React from "react";
import Subtitle from "../ui/Subtitle";
import EntryContainer from "../EntryContainer";
import { historyAtom } from "@/app/atoms/historyAtom";
import { Entry } from "@/app/types/entry";
import { useAtom } from "jotai";
import { ImCross } from "react-icons/im";

export function SidebarModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [history] = useAtom<Entry[] | []>(historyAtom);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/30 bg-opacity-50 z-40"
          onClick={onClose}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className="fixed inset-y-0 left-0 w-full md:w-[60vw] max-w-[700px] bg-slate-100 dark:bg-gray-700 shadow-lg z-50 transition-transform duration-300 ease-in-out p-6 overflow-hidden"
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-100%)" }}>
        <div className="w-full flex flex-row justify-between items-center py-2 mb-5">
          <Subtitle className="">Historial</Subtitle>
          <ImCross
            className="text-gray-800 dark:text-slate-100 cursor-pointer h-5 w-5"
            onClick={onClose}
          />
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto custom-scrollbar">
          <EntryContainer entries={history} />
        </div>
      </aside>
    </>
  );
}
