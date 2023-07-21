import {Link} from '@remix-run/react';
export default function CategoryCard({ collections }) {
    const categoryChar=['M','S','J','B'];
    //console.log(collections);
    return (
        <>
            {collections.map((item, index) => (
                <Link  key={index} to={`/productList/${item.handle}`} className="group relative block bg-black w-[315px]">
                    <img
                        key={index}
                        src={item.image['url']}
                        alt={`Image of ${item.title}`}
                        data={item.image}
                        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                    />
                    <div className="relative p-4 sm:p-6 lg:p-8">
                        <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                            {categoryChar[index]}
                        </p>
                        <p className="text-xl font-bold text-white sm:text-2xl">  {item.title}</p>

                        <div className="mt-32 sm:mt-48 lg:mt-64">
                            <div
                                className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                            >
                                <div className="text-sm text-white" dangerouslySetInnerHTML={{ __html: item.description }}></div>
                            </div>
                        </div>
                    </div>
                </Link>
                ))}
        </>
    );
}
