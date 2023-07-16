export default function CardSection({categoryName,categoryStatus,categoryDescription,imgName}) {
    const pics={
        sport:'https://cdn.shopify.com/s/files/1/0791/4215/8631/files/sport_pic.png?v=1689440513',
        games:'https://cdn.shopify.com/s/files/1/0791/4215/8631/files/game.png?v=1689440310',
        beauty:'https://cdn.shopify.com/s/files/1/0791/4215/8631/files/flower.png?v=1689440948',
        house:'https://cdn.shopify.com/s/files/1/0791/4215/8631/files/house_pic.png?v=1689440570'
    }
    return (
        <a href="#" className="group relative block bg-black w-[315px]">
            <img
                alt="Developer"
                src={pics[imgName]}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
            />
            <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                    {categoryStatus}
                </p>
                <p className="text-xl font-bold text-white sm:text-2xl">  {categoryName}</p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                    <div
                        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                    >
                        <div className="text-sm text-white" dangerouslySetInnerHTML={{ __html: categoryDescription }}></div>
                    </div>
                </div>
            </div>
        </a>
    );
}