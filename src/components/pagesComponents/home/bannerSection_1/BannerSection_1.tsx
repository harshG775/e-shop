import CallToAction from "@/components/ui/CallToAction";

type BannerSection_1Type = {
    title: string | null;
    left: {
        title: string;
        description: string;
        background: string;
        callToAction: {
            title: string;
            link: string;
        }[];
    };
    right: {
        title: string;
        description: string;
        background: string;
        callToAction: {
            title: string;
            link: string;
        }[];
    };
};
type BannerSection_1Props = {
    data: BannerSection_1Type;
};
export default function BannerSection_1({ data }: BannerSection_1Props) {
    const { left, right } = data;
    return (
        <section>
            <div
                className="
                    max-w-8xl mx-auto p-4 lg:p-8 transition-[padding] duration-300 delay-100 ease-in-out
                    grid lg:grid-cols-[3fr_2fr] gap-4
                "
            >
                <div
                    style={{ backgroundImage: `url(${left.background})` , backgroundSize: "cover"}}
                    className="min-h-96 rounded-xl p-10 flex flex-col justify-start gap-4 items-end"
                >
                    <h2 className="text-4xl font-semibold text-primary-500">{left.title}</h2>
                    <p className="text-3xl text-neutral-500">{left.description}</p>
                    <CallToAction callToAction={left.callToAction} />
                </div>
                <div
                    style={{ backgroundImage: `url(${right.background})`, backgroundSize: "cover"}}
                    className="min-h-96 rounded-xl p-10 flex flex-col justify-start gap-4 "
                >
                    <h2 className="text-4xl font-semibold text-primary-500">{right.title}</h2>
                    <p className="text-3xl text-neutral-500">{right.description}</p>
                    <CallToAction callToAction={right.callToAction} />
                </div>
            </div>
        </section>
    );
}
