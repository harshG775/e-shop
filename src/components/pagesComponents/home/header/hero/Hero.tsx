import CallToAction from "@/components/ui/CallToAction";

type HeroType = {
    title: string;
    subtitle: string;
    background: string;
    callToAction: {
        title: string;
        link: string;
    }[];
};
type HeroPropsType = {
    data: HeroType;
};
export default function Hero({ data }: HeroPropsType) {
    const { title, subtitle, background, callToAction } = data;
    return (
        <section className="max-w-8xl mx-auto p-4 lg:p-8 transition-[padding] duration-300 delay-100 ease-in-out">
            <div
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "right",
                }}
                className=" rounded-xl p-4 relative min-h-[500px] grid grid-cols-1 lg:grid-cols-[2fr_1fr] items-center"
            >
                <div className="backdrop-blur-md rounded-3xl text-center bg-neutral-0/20 grid gap-4 p-6 py-16 lg:text-start items-end">
                    <div className="max-w-lg lg:max-h-full grid gap-4 mx-auto lg:ml-0">
                        <h1 className="text-5xl font-bold text-primary-500">{title}</h1>
                        <h2 className="text-3xl font-medium text-neutral-900">{subtitle}</h2>
                    </div>
                    <CallToAction className="justify-center lg:justify-end" callToAction={callToAction} />
                </div>
            </div>
        </section>
    );
}
