import Icon from "@/components/icons/lucide";

type HeroBottomType = {
    title: string;
    description: string;
    icon: string;
}
type HeroBottomPropsType = {
    data: HeroBottomType[];
}
export default function HeroBottom( { data }: HeroBottomPropsType ) {
    return (
        <section className="max-w-8xl mx-auto p-4 lg:p-8 transition-[padding] duration-300 delay-100 ease-in-out">
            <ul className="grid lg:grid-flow-col lg:gap-4 gap-6">
                {data.map((item, index) => (
                    <li key={index} className="grid gap-2 grid-cols-[auto_1fr] items-center">
                        <div className="p-2">
                            {/* @ts-ignore */}
                            <Icon className="w-10 h-10" name={item.icon} />
                        </div>
                        <div>
                            <h1 className="font-bold text-primary-500">{item.title}</h1>
                            <p className=" font-medium text-neutral-900">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}