import  Starts from '../button/starts';
import { Link } from '@remix-run/react';
export default function GridCard({ product, isMobile }) {

    const { price, compareAtPrice } = product.variants?.nodes[0] || {};
    const isDiscounted = compareAtPrice?.amount > price?.amount;

    return (
        <div
            key={product.handle}
            className={`relative 
            ${isMobile ? 'mt-1 mb-1 basis-1/2' : " w-[16rem] ml-10 mt-1 mr-[-1.8rem] mb-10 hover-zoom"}
            max-w-xs flex flex-col overflow-hidden rounded-sm border border-gray-100 bg-white shadow-md`}>
            <div>
                <Link to={`/products/${product.handle}`}>
                    <a className="relative mx-3 mt-3 flex h-50 overflow-hidden rounded-xl" href="#">
                        <img className="object-cover" src={product.variants.nodes[0].image.url} alt="product image" />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">39% OFF</span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                        <span className={`inline-flex items-center px-2 py-1
                    ${isMobile ? 'text-[10px]' : 'text-xs'}
                    font-semibold text-white bg-blue-500 rounded-full`}>
                            Boutique Officielle
                        </span>
                        <a href="#">
                            <h5 className="text-[1rem] tracking-tight text-slate-900 truncate">{product.title}</h5>
                        </a>
                        <div className={`mt-2 mb-5 
                ${isMobile ? 'flex-col' : ' flex items-center justify-between'}`
                        }>
                            <p>
                                <span className="text-[1.2rem] font-bold text-slate-900">{product.variants.nodes[0].price.amount}</span>
                                <span className="text-[1rem] text-slate-900 line-through">{product.variants.nodes[0].compareAtPrice.amount}</span>
                            </p>
                            <Starts     />
                        </div>
                    </div>
                </Link>
                <a href="#" className={`
                ${isMobile ? 'basis-1/2 text-[9px]' : ''}
                flex items-center justify-center rounded-md bg-slate-900 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</a>
            </div>
        </div>
    );
}