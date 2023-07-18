import ProductCard from './ProductCard';
export default function ProductGrid({ collection, url }) {
    return (
        <>
        <div className="overflow-x-auto whitespace-nowrap">
            <section className="w-fit ml-0 flex flex-row justify-center flex-shrink-0">
            {collection.products.nodes.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
            </section>
        </div>
        </>
    );
}