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
  // Extract year, month, day, hour, minute, and second components from the date string
  const [, year, month, day, hour, minute, second] =
    dateString.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/) || [];

  if (!year || !month || !day || !hour || !minute || !second) {
    return "Invalid Date";
  }

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

  // Get month name from months array
  const monthName: string = months[parseInt(month) - 1];

  // Construct the formatted date string
  const formattedDate: string = `${monthName} ${parseInt(day)}, ${year}`;

  return formattedDate;
}

export function formatDate(dateString: string): string {
  const [datePart] = dateString.split(" "); // Split date and time parts
  const [year, month, day] = datePart.split("-").map(Number); // Split date into year, month, and day

  // Format the date components into the desired format
  const formattedDate: string = `${day}/${month}/${year}`;

  return formattedDate;
}
