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
                txt: "hsl(var(--text) / <alpha-value>)",
                bg: "hsl(var(--background) / <alpha-value>)",
            },
        },
    },
    plugins: [],
};
export default config;
