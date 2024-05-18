"use client";
import { setCookie } from "cookies-next";
import { useState } from "react";
import Icon from "../icons/lucide";
export default function ThemeHandler({
    currentTheme,
}: {
    currentTheme: string;
}) {
    const [cTheme, setCTheme] = useState(currentTheme);

    const handleTheme = () => {
        const newTheme = cTheme === "light" ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        setCookie("theme", newTheme, { maxAge: 30 * 24 * 60 * 60, path: "/" });
        setCTheme(newTheme);
    };

    return (
        <button className="fixed bottom-4 right-4 p-2 text-primary-500 rounded-full hover:bg-primary-500 hover:text-neutral-50" onClick={handleTheme}>
            <Icon
                name={cTheme === "light" ? "Moon" : "Sun"}
                className="w-6 h-6"
            />
        </button>
    );
}
