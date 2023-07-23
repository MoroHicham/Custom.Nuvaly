import { useContext } from "react";
import ListCard from "./ListCard";
import GlobalContext from '~/containers/globalContext';

export default function ListView({isMobile}) {
    // Current Context
    const { args2 } = useContext(GlobalContext);
    
    return (
        <>
            {/* Product Grid List - Start */}
            <div className="container justify-start flex-wrap">
            { args2.products.nodes.map((item, index) => (
               <ListCard key={index} product={item} isMobile={isMobile} />
            ))}
            </div>
        </>
    );
}