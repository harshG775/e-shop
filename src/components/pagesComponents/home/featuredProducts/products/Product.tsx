import Icon from "@/components/icons/lucide";
import Image from "next/image";
import Link from "next/link";

export type ProductType = {
    name: string;
    image: string;
    type: string;
    price: string;
    rating: number;
    ratedBy: number;
};

export default function Product({ product }: { product: ProductType }) {
    const { name, image, type, price, rating, ratedBy } = product;
    return (
        <li>
            <Link
                href={`/shop/${type}/${name}`}
                className="mx-auto flex flex-wrap gap-2 p-2 rounded-md shadow-md hover:shadow-primary-500/50"
            >
                <div className="flex-1 p-2 ">
                    <Image
                        className="w-full max-w-60 h-auto rounded-lg"
                        width={100}
                        height={100}
                        src={image}
                        alt={name}
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center gap-2">
                    
                    <h3 className="line-clamp-2 font-medium text-neutral-900">
                        {name}
                    </h3>
                    <p className=" font-bold underline underline-offset-2 text-primary-500">
                        {price}
                    </p>
                    <div className="mt-4 flex items-center justify-between text-sm font-medium gap-2">
                        <span className="flex gap-1">
                            {rating}
                            <Icon name="Star" className=" w-4 h-4 text-primary-500"/>
                        </span>
                        <span>Buyers: {ratedBy}</span>
                    </div>
                </div>
            </Link>
        </li>
    );
}
