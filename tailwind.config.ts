import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            maxWidth: {
                "8xl": "96rem",
            },
            maxHeight: {
                "8xl": "96rem",
            },
            minWidth: {
                "8xl": "96rem",
            },
            minHeight: {
                "8xl": "96rem",
            },
            colors: {
                // primary: "hsl(var(--primary) / <alpha-value>)",
                // txt: "hsl(var(--text) / <alpha-value>)",
                // bg: "hsl(var(--background) / <alpha-value>)",
                text:{
                    50: "hsl(var(--text-50) / <alpha-value>)",
                    100: "hsl(var(--text-100) / <alpha-value>)",
                    200: "hsl(var(--text-200) / <alpha-value>)",
                    300: "hsl(var(--text-300) / <alpha-value>)",
                    400: "hsl(var(--text-400) / <alpha-value>)",
                    500: "hsl(var(--text-500) / <alpha-value>)",
                    600: "hsl(var(--text-600) / <alpha-value>)",
                    700: "hsl(var(--text-700) / <alpha-value>)",
                    800: "hsl(var(--text-800) / <alpha-value>)",
                    900: "hsl(var(--text-900) / <alpha-value>)",
                    950: "hsl(var(--text-950) / <alpha-value>)",
                },
                background:{
                    50: "hsl(var(--background-50) / <alpha-value>)",
                    100: "hsl(var(--background-100) / <alpha-value>)",
                    200: "hsl(var(--background-200) / <alpha-value>)",
                    300: "hsl(var(--background-300) / <alpha-value>)",
                    400: "hsl(var(--background-400) / <alpha-value>)",
                    500: "hsl(var(--background-500) / <alpha-value>)",
                    600: "hsl(var(--background-600) / <alpha-value>)",
                    700: "hsl(var(--background-700) / <alpha-value>)",
                    800: "hsl(var(--background-800) / <alpha-value>)",
                    900: "hsl(var(--background-900) / <alpha-value>)",
                    950: "hsl(var(--background-950) / <alpha-value>)",
                },
                primary:{
                    50: "hsl(var(--primary-50) / <alpha-value>)",
                    100: "hsl(var(--primary-100) / <alpha-value>)",
                    200: "hsl(var(--primary-200) / <alpha-value>)",
                    300: "hsl(var(--primary-300) / <alpha-value>)",
                    400: "hsl(var(--primary-400) / <alpha-value>)",
                    500: "hsl(var(--primary-500) / <alpha-value>)",
                    600: "hsl(var(--primary-600) / <alpha-value>)",
                    700: "hsl(var(--primary-700) / <alpha-value>)",
                    800: "hsl(var(--primary-800) / <alpha-value>)",
                    900: "hsl(var(--primary-900) / <alpha-value>)",
                    950: "hsl(var(--primary-950) / <alpha-value>)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
