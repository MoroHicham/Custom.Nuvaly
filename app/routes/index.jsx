

// Entry Router Point Index for Main Layout
import {useLoaderData} from '@remix-run/react';
import OptionSection from "../components/content/optionSection";
import ProductScrollByCategory from '~/components/content/ProductScrollByCategory';
import  useIsMobileHook from "../hooks/isMobileHook";
import CategoryCard from "../components/content/categoryCard";

// Define Loader for data fetch 
export async function loader({context}) {
    return await context.storefront.query(COLLECTIONS_QUERY);
}


// Index Component 
export default function Index() {
    
    const {collections}=useLoaderData();
    const { isMobile } = useIsMobileHook();
    
   
     // Pre-defined index handlers 
    const indexHandlers=['maison-cuisine-bureaux','sport-loisirs','beaute-sante','bebe-jouets','meilleures-vente'];
    
    // Css attributes declaration, initial width and height values.
    const dynamicLaptopAndMobileVersion = {
        mobileVersion: {
            width: isMobile ? "100px" : "200px",
            height: isMobile ? "100px" : "200px",
            lineHeight: isMobile ? "20%" : "50%",
        }
    }

    // Dynamic css class for Mobile and Laptop version
    const circleStyle = {
        ctrs: {
            display: "flex",
            width: dynamicLaptopAndMobileVersion.mobileVersion.width,
            height: dynamicLaptopAndMobileVersion.mobileVersion.height,
            lineHeight: dynamicLaptopAndMobileVersion.mobileVersion.lineHeight,
            border: "2px solid rgb(180, 178, 178)",
            borderRadius: "50%",
            textAlign: "center !important",
            verticalAlign: "middle",
            justifyContent: "center",
            alignItems: "center",
            overflow: "visible"
        }
    }
    
    return (
        <section className="flex flex-col">
            {/* Option Section - Start  */}
            <div className="flex flex-row flex-wrap justify-center bg-white shadow shadow-lg shadow-bottom-gray-500">
                <OptionSection iconName={'truck'} isBordered={true} title={'Payez à la livraison'} description={'<center>Commandez en toute confiance et payez à la livraison <br /> sans soucis de paiement.</center>'} />
                <OptionSection iconName={'fuss'} isBordered={true} title={'Retour Gratuit'} description={'<center>Achat sans regrets, retour facile et gratuit<br /> vous avez l assurance d une satisfaction totale.</center>'} />
                <OptionSection iconName={'promotion'} isBordered={false} title={'Promotions exclusives'} description={'<center>Rien que pour vous économisez<br /> davantage avec nos promotions spéciales..</center>'} />
            </div>
            {/* Option Section - End  */}

            <div className="pl-2 opacity-70 absolute">
                <div className="laptop:text-[15px] max-[750px]:text-[8px] min-[750px]:text-[8px] transform origin-top-right -rotate-12 font-bold " style={circleStyle.ctrs}>/FEEL THE MOMENT</div>
            </div>

            {/* Category Section - Start */}
            <div className=" flex flex-row gap-1 justify-center bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-wrap">
                <CategoryCard collections={collections.nodes.filter(item => item.image !== null)} /> 
            </div>
            {/* Category Section - End */}

            {/* Best Seller Section -  Start */}
            <div className="flex flex-col justify-start bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-nowrap">
                <ProductScrollByCategory collection={Array(collections.nodes.find(item => item.handle === 'meilleures-vente'))} url={`/collections/${collections.nodes.filter(item => item.handle === 'meilleures-vente').handle}`}/>
            </div>
             {/* Best Seller Section - End */}


            {/* Sport Category - Start  */}
            <div className=" flex flex-row gap-1 justify-center  bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-wrap">
             
            </div>
            {/* Sport Category - End  */}

        </section>
    );
}


const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 5, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        description
        image {
            id
            url
          }
        products(first: 8) {
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
  }
`;