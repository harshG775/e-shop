import Link from "next/link";
import Button from "./buttons/Button";
import { cn } from "@/utils/cn";

type CallToActionType = {
    title: string;
    link: string;
};
type CallToActionPropsType = {
    className?: string;
    callToAction: CallToActionType[];
};
export default function CallToAction({callToAction,className,...rest}: CallToActionPropsType) {
    return (
        <div className={cn("flex gap-4", className)} {...rest}>
            {callToAction.map((item, index) => (
                <Link key={index} href={item.link}>
                    {index === 0 ? (
                        <Button className="bg-primary-500 text-white">
                            {item.title}
                        </Button>
                    ) : (
                        <Button variant="outline">{item.title}</Button>
                    )}
                </Link>
            ))}
        </div>
    );
}
