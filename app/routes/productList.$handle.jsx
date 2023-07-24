import { useState } from 'react';
import FixedBottomBar from "../components/content/fixedBottomBar";
import ProductListView from "../components/content/productListView";
import useIsMobileHook from "../hooks/isMobileHook";
import { useLoaderData } from '@remix-run/react';
import { json } from '@shopify/remix-oxygen';

export async function loader({ params, context }) {
    const { handle } = params;
    const { collection } = await context.storefront.query(COLLECTION_QUERY, {
        variables: {
            handle,
        },
    });

    // Handle 404s
    if (!collection) {
        throw new Response(null, { status: 404 });
    }

    // json is a Remix utility for creating application/json responses
    // https://remix.run/docs/en/v1/utils/json
    return json({
        collection,
    });
}
const seo = ({ data }) => ({
    title: data?.collection?.title,
    description: data?.collection?.description.substr(0, 154),
});

export const handle = {
    seo,
};
export default function ProductList() {

    const { collection } = useLoaderData();

    const { isMobile } = useIsMobileHook();
    const [isHovered, setIsHovered] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Option 1');
    const [isGridView, setIsGridView] = useState(true);


    const toggleView = () => {
        setIsGridView((prevIsGridView) => !prevIsGridView);
        console.log(isMobile, isGridView);
    };


    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    let defaultColorSelect = false;
    const textColor = isHovered ? 'text-orange-600' : 'text-gray-500';
    const handleMouseEnter = () => {
        defaultColorSelect = false;
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        defaultColorSelect = true;
        setIsHovered(false);
    };

    return (
        <div className="flex flex-col justify-center">

            {/* <div className="pt-3 pl-10 font-bold text-sm text-gray-600">{`TOUS LES PRODUITS`}</div> */}

            {/* Ads - Section   */}
            <div className=" flex flex-row justify-center items-center mt-5 flex-wrap">
                {/* <p className="font-bold  whitespace-normal text-center">Restez à l'affût des nouveautés qui vous éblouiront bientôt !</p> */}
                {/* <img src="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/headProductListPic.png?v=1689906598" alt="Your Alt Text" className="w-[55%]" /> */}
            </div>
            {/*  Ads - Section   */}


            <div className="flex flex-row gap-x-2 justify-center ">
                {/* Side Bar - Start  */}
                {!isMobile ?
                    <div className="flex flex-row gap-1 justify-center bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-wrap basis-[20%]">
                        <img src="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/460430164390635.63f60aca6e34f.gif?v=1689903543" alt="Your Alt Text" className="h-[25rem]" />
                    </div>
                    :
                    null
                }

                {/* Side Bar - End  */}
                {/* Product List  - Start  */}
                <div className={`flex flex-col gap-1 justify-center 
                  bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-wrap 
                  ${!isMobile ? 'basis-[75%]' : 'basis-[100%]'}`}>
                    {/* { isMobile ?  <GridView isMobile={true}/> : !isMobile && isGridView ? <GridView isMobile={false}/> : <ListView /> } */}
                    <ProductListView isMobile={isMobile}  productCollection={collection} />
                </div>
                {/* Product List  - Start  */}
            </div>
            {/* <FixedBottomBar /> */}
        </div>
    );
}

const COLLECTION_QUERY = `#graphql
  query CollectionDetails($handle: String!) {
    collection(handle: $handle) {
      id
      title
      description
      handle
      products(first: 4) {
        nodes {
          id
          title
          publishedAt
          handle
          variants(first: 1) {
            nodes {
              id
              image {
                url
                altText
                width
                height
              }
              price {
                amount
                currencyCode
              }
              compareAtPrice {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`;