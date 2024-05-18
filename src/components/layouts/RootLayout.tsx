import TanstackQuery from "@/lib/TanstackQuery";
import { cn } from "@/utils/cn";
import React from "react";
import ThemeHandler from "../ui/ThemeHandler";

import { cookies } from "next/headers"

type RootLayoutProps = {
    children: React.ReactNode;
    className?: string;
};
export default function Layout({ children, ...rest }: RootLayoutProps) {
    const { className } = rest;
    const {get} = cookies();
    const theme = get("theme");
    return (
        <html lang="en" data-theme={theme?.value||"light"}>
            <body className={cn("", className)} {...rest}>
                <TanstackQuery>
                    {children}
                    <ThemeHandler currentTheme={theme?.value||"light"}/>
                </TanstackQuery>
            </body>
        </html>
    );
}
