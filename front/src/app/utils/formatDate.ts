export function formatDate(timestamp: number): string {
  const date = new Date(timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return `${formattedDate}`;
}
