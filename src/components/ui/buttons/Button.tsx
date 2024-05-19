import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import React from "react";
type ButtonProps = React.HtmlHTMLAttributes<HTMLButtonElement> & {
    size?: "base" | "sm" | "lg" | "icon";
    variant?:
        | "primary"
        | "secondary"
        | "danger"
        | "success"
        | "warning"
        | "outline";
};

const buttonVariants = cva(
    `
    rounded-md
    tracking-tighter font-semibold
    hover:opacity-70 active:opacity-80
    transition-[opacity,transform,outline] duration-300
    
    `,
    {
        variants: {
            variant: {
                primary: "bg-blue-500 text-neutral-50",
                secondary: "bg-neutral-500 text-neutral-50",
                danger: "bg-red-500 text-neutral-50",
                success: "bg-green-500 text-neutral-50",
                warning: "bg-yellow-500 text-neutral-50",
                outline: "outline outline-2 hover:outline-offset-2 outline-primary-500 text-primary-500",
            },
            size: {
                base: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "primary",
            size: "base",
        },
    }
);

export default function Button({
    variant,
    size,
    className,
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            className={cn(buttonVariants({ variant, size, className }))}
        />
    );
}
