import ProductCard from './ProductCard';
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import {Link} from '@remix-run/react';
export default function ProductGrid({ collection, url }) {
    return (
        <>
            <div className="flex flex-row justify-between flex-wrap pt-2 gap-3">
                <div className="flex flex-row justify-start pl-[3.5rem] max-[750px]:pl-[1.5rem]">
                    <h1 className="underline underline-offset-8 font-normal laptop:text-[20px]"><span className="font-bold">TOP DEALS</span> | {collection[0].title.toUpperCase()}</h1>
                </div>
                <Link  key={0} to={`/collections/${collection[0].handle}`}>
                <div className="flex flex-row justify-start laptop:pr-[3.5rem] max-[750px]:pr-[1rem]">
                    <h1 className="underline underline-offset-8 font-arial laptop:text-[15px] max-[750px]:text-[10px] max-[750px]:pl-[1.5rem] font-bold">VOIR PLUS</h1>
                    <ArrowLongRightIcon className="laptop:h-6 laptop:w-6 max-[750px]:h-4 max-[750px]:w-4 text-gray-900" />
                </div>
                </Link>
            </div>
            <div className="overflow-x-auto whitespace-nowrap">
                <section className="w-fit ml-0 flex flex-row justify-center flex-shrink-0">
                    {collection[0].products.nodes.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </section>
            </div>
        </>
    );
}