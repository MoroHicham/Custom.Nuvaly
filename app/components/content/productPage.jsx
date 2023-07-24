import Starts from "../button/starts";
import Badge from "../button/badge";
import BreadCrumbs from "../button/breadCrumbs";
import useIsMobileHook from "~/hooks/isMobileHook";
import { ArrowSmallRightIcon, ArrowSmallLeftIcon } from "@heroicons/react/24/outline";
export default function ProductPage() {

    // Mobile version - val
    const { isMobile } = useIsMobileHook();
    const imageSize = !isMobile ? 'w-40 h-40' : 'w-40 h-40 inline-block px-1 py-2';

    return (
        <>
            <div className="flex flex-col gap-12">
                <BreadCrumbs />
                <div className="flex flex-row flex-wrap mt-5 bg-white shadow-lg p-5">
                    <div className={`flex ${!isMobile ? 'flex-row basis-1/2 ' : 'flex-col-reverse'} gap-6 mt-5`}>
                        <div className={`flex ${!isMobile ? 'flex-col shadow-lg' : 'shadow-lg overflow-x-auto whitespace-nowrap relative'}  `}>

                            <img className={`${imageSize} pb-1`} srcSet="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/c2.png?v=1690138529" />
                            <img className={`${imageSize} pb-1`} srcSet="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/c3.png?v=1690138528" />
                            <img className={`${imageSize} pb-1`} srcSet="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/c1.png?v=1690138527" />

                        </div>

                        <div className="shadow-lg">
                            <img className="basis-1/2" srcSet="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/51IF5kpotSL._SX466_43223dc5-003b-45ce-98d3-51fff3e13f4f.jpg?v=1689644658" />
                        </div>
                    </div>

                    <div className=
                        {`flex flex-col mt-5 gap-5 ${!isMobile ? 'basis-1/2 pr-7 ' : ''}`}>
                        <h1 className="font-semibold text-[22px]">COSRX Snail Mucin 96% Power Repairing Essence 3.38 fl.oz, 100ml, Hydrating Serum for Face with Snail Secretion Filtrate for Dark Spots and Fine Lines, Not Tested on Animals, No Parabens, No Sulfates, No Phthalates, Korean Skincare</h1>
                        <Starts />
                        <div className="flex flex-row">
                            <div className="rounded-lg px-4 py-2 border border-gray-300 focus:outline-none focus:border-blue-500">
                                <button className="font-bold text-[25px] border-r-2 p-1" type="button">-</button>
                                <input className="border-none text-center text-lg font-bold px-4 py-2 bg-white focus:bg-white focus:outline-none" type="number" name="product-qty" min="0" max="10" readOnly value={1} />
                                <button className="font-bold text-[25px] border-l-2 p-1" type="button">+</button>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between items-center border-t-[0.5px] border-b-[0.5px] border-gray-500 pt-2 pb-2">
                            <div className="flex items-start">
                                <h1 className={` font-bold ${!isMobile ? 'text-3xl' : 'text-[25px]'}`}>60.50 MAD</h1>
                                <div className="mt-2 mb-5 flex flex-col items-center justify-between">
                                    <p><span className=
                                    {`text-slate-900 line-through ${!isMobile ? 'text-[1rem] ' :'text-[1rem]'}`}
                                    >{'150'} Dhs</span><span className="bg-red-400 text-black ml-2">-{(((699 - 449) / 699) * 100).toFixed(2)}%</span></p>
                                </div>
                            </div>

                            <button type="button" className="inline-flex items-end justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>

                        <ul className="mt-8 space-y-2">
                            <Badge color="bg-green-400" data={'Disponible'} />
                            <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                </svg>
                                Free shipping worldwide
                            </li>

                            <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                                </svg>
                                Cancel Anytime
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <TabsBasic /> */}
            </div>
        </>
    );

}