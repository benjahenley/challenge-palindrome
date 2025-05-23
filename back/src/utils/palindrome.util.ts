export function isPalindrome(str: string): boolean {
  const cleanString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleanString === cleanString.split("").reverse().join("");
}
