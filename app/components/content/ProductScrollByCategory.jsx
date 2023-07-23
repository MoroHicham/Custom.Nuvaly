import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import {Link} from '@remix-run/react';
import GridCard from './GridCard';

export default function ProductScrollByCategory({ collection, url }) {
    
    return (
        <>
        { collection[0]!==null ?
         <Link  key={0} to={`/}`}>
            <div className="flex flex-row justify-between flex-wrap pt-2 gap-3">
                <div className="flex flex-row justify-start pl-[3.5rem] max-[750px]:pl-[1.5rem]">
                    <h1 className="underline underline-offset-8 font-normal laptop:text-[20px]"><span className="font-bold">TOP DEALS</span> | {collection[0].title.toUpperCase()}</h1>
                </div>
               
                <div className="flex flex-row justify-start laptop:pr-[3.5rem] max-[750px]:pr-[1rem]">
                <Link key={1} to={`/productList/${collection[0].handle}`}><h1 className="underline underline-offset-8 font-arial laptop:text-[15px] max-[750px]:text-[10px] max-[750px]:pl-[1.5rem] font-bold">VOIR PLUS</h1></Link>
                    <ArrowLongRightIcon className="laptop:h-6 laptop:w-6 max-[750px]:h-4 max-[750px]:w-4 text-gray-900" />
                </div>
            </div>
            <div className="overflow-x-auto whitespace-nowrap">
                <section className="w-fit ml-0 flex flex-row justify-center flex-shrink-0">
                    {collection[0].products.nodes.map((product, index) => (
                        <GridCard key={product.id} product={product} index={index} />
                    ))}
                </section>
            </div>
            </Link>
            : null }
        </>
    );
}