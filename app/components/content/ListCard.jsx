import { Link } from '@remix-run/react';
import  Starts from '../button/starts';
export default function ListCard({ product, isMobile }) {

    const { price, compareAtPrice } = product.variants?.nodes[0] || {};
    const isDiscounted = compareAtPrice?.amount > price?.amount;

    return (
        <div
            key={product.handle}
            className="w-full pb-4 flex flex-row justify-center  overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover-zoom">
            <div>
                <Link to={`/products/${product.handle}`}>
                    <a className="relative flex-row mx-3 mt-3 flex h-50 overflow-hidden rounded-xl" href="#">
                        <img className="image-container"
                            src={product.variants.nodes[0].image.url}
                            alt="product image" />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                    </a>
                    <div className="mt-4 pl-[1.25rem] pr-[4.25rem] pb-5">
                        <span className="inline-flex items-center px-2 py-1 text-xs font-semibold text-white bg-blue-500 rounded-full">
                            Boutique Officielle
                        </span>
                        <a href="#">
                            <h5 className="text-[1rem] tracking-tight text-slate-900">{product.title}</h5>
                          <Starts />
                        </a>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col basis-1/2 items-end justify-between pr-5">
                <div className="mt-2 mb-5 flex flex-col items-center justify-between">
                    <p><span className="text-[1.2rem] font-bold text-slate-900">{product.variants.nodes[0].price.amount}Dhs</span></p>
                    <p><span className="text-[1rem] text-slate-900 line-through">{product.variants.nodes[0].compareAtPrice.amount} Dhs</span><span className="bg-orange-200 text-yellow-600 ml-2">-{(((699 - 449) / 699) * 100).toFixed(2)}%</span></p>
                </div>
                <a href="#" className="flex w-[20rem] items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</a>
            </div>
        </div>
    );
}