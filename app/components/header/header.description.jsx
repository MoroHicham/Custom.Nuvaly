export default function HeaderDescription() {
    return (
        <div className="flex flex-col pt-8 pl-64">
            <div className="flex flex-row max-[750px]:justify-end min-[750px]:justify-end laptop:justify-around">
                <p className="font-arial font-bold laptop:text-[100px] laptop:leading-[98px] max-[750px]:text-[45px] min-[750px]:text-[45px] max-[750px]:leading-[50px] min-[750px]:leading-[50px] text-[#7B7A7A] max-[750px]:pt-[45px] min-[750px]:pt-[45px] laptop:pr-80 relative max-[750px]:pr-7 min-[750px]:pr-7 tablet:mr-44 laptop:pt-[100px]">BEAUTI<span className="stroke laptop:pl-5 max-[750px]:pl-3 min-[750px]:pl-3">FUL</span><br /> SKIN IS<span className="stroke laptop:pl-9 max-[750px]:pl-4 min-[750px]:pl-4">THE</span><br />BEST&nbsp;&nbsp;&nbsp;&nbsp;<span className="stroke laptop:pl-5 max-[750px]:pl-1 min-[750px]:pl-1">JEWEL</span> </p>
                <img className="laptop:h-[580px] laptop:ml-40 max-[750px]:h-[250px] min-[750px]:h-[250px] w-auto -z-10 absolute max-[750px]:pr-1 min-[750px]:pr-1 tablet:mr-44" src="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/header_image_74a9e6fc-2a99-4bdf-bc4a-ffb26f75a74f.png?v=1689294616" alt="headerImage" />
            </div>
        </div>
    );
}


// Laptop Version
/*export default function HeaderDescription() {
    return (
        <div className="flex flex-col pt-8">
            <div className="flex flex-row justify-around flex-nowrap">
                <p className="font-arial font-bold text-[100px] leading-[98px] text-[#7B7A7A] pt-[100px] relative pr-80">BEAUTI<span className="stroke pl-5">FUL</span><br /> SKIN IS<span className="stroke pl-9">THE</span><br />BEST&nbsp;&nbsp;&nbsp;&nbsp;<span className="stroke pl-5">JEWEL</span> </p>
                <img className="h-[580px] w-auto -z-10 absolute ml-40" src="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/header_image_74a9e6fc-2a99-4bdf-bc4a-ffb26f75a74f.png?v=1689294616" alt="headerImage" />
            </div>
        </div>
    );
}
*/
