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
                neutral: {
                    0: "hsl(var(--neutral-0) / <alpha-value>)",
                    50: "hsl(var(--neutral-50) / <alpha-value>)",
                    100: "hsl(var(--neutral-100) / <alpha-value>)",
                    200: "hsl(var(--neutral-200) / <alpha-value>)",
                    300: "hsl(var(--neutral-300) / <alpha-value>)",
                    400: "hsl(var(--neutral-400) / <alpha-value>)",
                    500: "hsl(var(--neutral-500) / <alpha-value>)",
                    600: "hsl(var(--neutral-600) / <alpha-value>)",
                    700: "hsl(var(--neutral-700) / <alpha-value>)",
                    800: "hsl(var(--neutral-800) / <alpha-value>)",
                    900: "hsl(var(--neutral-900) / <alpha-value>)",
                    950: "hsl(var(--neutral-950) / <alpha-value>)",
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
