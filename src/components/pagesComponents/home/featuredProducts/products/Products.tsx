import Product, { ProductType } from "./Product";

export type ProductsType = {
    products: ProductType[];
};

export default function Products({ products }: ProductsType) {
    return (
        <ul className="my-4 grid grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-4 lg:gap-8">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </ul>
    );
}
