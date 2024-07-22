import type { CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme = {
  navbar: {
    root: {
      base: "bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4 border-b",
    },
    link: {
      base: "block py-2 pl-3 pr-4 md:p-0",
      active: {
        on: "bg-blue-600 text-white dark:text-white md:bg-transparent md:text-blue-600",
        off: "border-b border-gray-100 text-gray-800 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-white",
      },
    },
    toggle: {
      base: "inline-flex items-center rounded-lg p-2 text-sm text-blue-500 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600 md:hidden",
      icon: "h-6 w-6 shrink-0",
    },
  },
  card: {
    root: {
      children: "flex h-full flex-col justify-center gap-4 p-4",
    },
  },
};

export default customTheme;
