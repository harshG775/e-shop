import Icon from "@/components/icons/lucide";
import Link from "next/link";
import Products, { ProductsType } from "./products/Products";

type FeaturedProductsType = ProductsType & {
    title: string;
    linkToPage: string;
};

type FeaturedProductsPropsType = {
    data: FeaturedProductsType;
};

export default function FeaturedProducts({ data }: FeaturedProductsPropsType) {
    const { title, linkToPage, products } = data;
    return (
        <section>
            <div className="max-w-8xl mx-auto p-4 lg:p-8 transition-[padding] duration-300 delay-100 ease-in-out">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <Link href={linkToPage} className="group flex items-center gap-2 text-primary-500 underline underline-offset-2 hover:opacity-80">
                        View All
                        <Icon name="ChevronRight" className="group-hover:-translate-x-1 transition-transform duration-300 ease-in-out"/>
                    </Link>
                </div>
                <Products products={products} />
            </div>
        </section>
    );
}
