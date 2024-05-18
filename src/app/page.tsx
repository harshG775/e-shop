import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="h-dvh w-dvw grid place-content-center gap-4">
            <div className="text-4xl font-semibold">
                Welcome 
                <br className="sm:hidden"/>
                to
                <span className="text-primary-500 font-bold"> EShop</span>
            </div>
            <div className="text-center py-1">
                <Link
                    href="/home"
                    className="text-2xl font-bold bg-primary-500 text-neutral-50 rounded-md px-4 py-2 hover:bg-primary-400"
                >
                    Go to Home
                </Link>
            </div>
        </main>
    );
}
