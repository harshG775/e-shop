"use client";
import { setCookie } from "cookies-next";
import { useEffect, useState } from "react";




export default function ThemeHandler({currentTheme}: {currentTheme: string;}) {
    const [cTheme, setCTheme] = useState(currentTheme);
    
    const handleTheme = () => {
        const newTheme = cTheme === "light" ? "dark" : "light"
        document.documentElement.setAttribute("data-theme", newTheme);
        setCookie("theme", newTheme, { maxAge: 30 * 24 * 60 * 60, path: "/" });
        setCTheme(newTheme);
    };

    return <button onClick={handleTheme}>Theme toggle</button>;
}
