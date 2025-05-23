import { Entry } from "../types/entry";
import { formatDate } from "../utils/formatDate";
import { useEffect, useRef } from "react";

export default function EntryContainer({
  entries,
  className,
}: {
  entries: Entry[];
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const latestEntryRef = useRef<HTMLTableRowElement>(null);

  useEffect(() => {
    if (entries.length > 0 && latestEntryRef.current) {
      latestEntryRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [entries]);

  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className="overflow-x-auto overflow-y-auto h-full max-h-[600px] custom-scrollbar">
        <table className="min-w-full divide-gray-200">
          <thead className="bg-slate-200 dark:bg-gray-900 sticky top-0 z-10">
            <tr>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                Fecha
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-left text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                Palabra
              </th>
              <th
                scope="col"
                className="px-3 py-3 text-right text-sm font-bold text-gray-700 dark:text-gray-100 uppercase tracking-wider">
                Resultado
              </th>
            </tr>
          </thead>
          <tbody className="bg-slate-100 dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-800">
            {entries.map((entry, key) => (
              <tr
                key={key}
                ref={key === entries.length - 1 ? latestEntryRef : null}>
                <td className="px-3 py-3 whitespace-nowrap">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(entry.timestamp)}
                  </span>
                </td>
                <td className="px-3 py-3 whitespace-nowrap">
                  <div className="max-w-[120px] md:max-w-[500px] truncate">
                    <span className="font-medium">{entry.word}</span>
                  </div>
                </td>
                <td className="px-3 py-3 whitespace-nowrap text-right">
                  {entry.isPalindrome ? (
                    <span className="bg-green-400 px-3 py-1 text-sm rounded-xl text-white font-bold uppercase">
                      Si lo es!
                    </span>
                  ) : (
                    <span className="bg-red-400 px-3 py-1 rounded-xl text-sm text-white font-bold uppercase">
                      No lo es
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {entries.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="px-3 py-4 text-center text-sm text-gray-500 dark:text-gray-400">
                  No hay registros
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
