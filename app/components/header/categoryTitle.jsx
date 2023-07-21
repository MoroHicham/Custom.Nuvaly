export function CategoryTitle({ categoryName, Character }) {
    return (
        <div className="flex flex-row pt-5 max-[750px]:pt-2 pl-1  max-[750px]:place-content-center">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-[#d0d0d0] max-[750px]:hidden">
                <p className="text-black font-bold text-lg ">{Character}</p>
            </div>
            <div className="pt-2 pl-2 font-bold">
                {categoryName}
            </div>
        </div>
    );
}