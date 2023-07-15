export default function ProductSection() {
    return (
        <div>
            <section className="px-10 w-fit ml-0 flex flex-row justify-items-start justify-start gap-y-20 gap-x-[550px] mt-10 mb-5 ">
                <div className="w-72 bg-white shadow-md  duration-500 hover:scale-105 hover:shadow-xl pl-2 pr-2 pt-2 col-span-2">
                    <a href="#">
                        <img src="http://127.0.0.1:8887/public/img/img4.png" alt="Product" className="h-80 w-72 object-cover " />
                        <div className="px-4 py-3 w-72">
                            <span className="text-gray-400 mr-3 uppercase text-xs">BATCH CANDLE WITH SEA SALT</span>
                            <div className="flex items-center">
                                <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                                <del>
                                    <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                </del>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
        </div>
    );
}