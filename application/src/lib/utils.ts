import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const truncateString = (str: string, num: number = 20): string => {
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
};

export function formatDateToSpecificForm(dateString: string): string {
  const date = new Date(dateString);

  // Define months array for conversion
  const months: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get month, day, and year components
  const month: string = months[date.getMonth()];
  const day: number = date.getDate();
  const year: number = date.getFullYear();

  // Construct the formatted date string
  const formattedDate: string = `${month} ${day}, ${year}`;

  return formattedDate;
}
