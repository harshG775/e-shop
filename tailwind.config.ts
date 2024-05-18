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
                primary: "hsl(var(--primary) / <alpha-value>)",
                text: "hsl(var(--text) / <alpha-value>)",
                background: "hsl(var(--background) / <alpha-value>)",
            },
        },
    },
    plugins: [],
    darkMode: "class",
};
export default config;
