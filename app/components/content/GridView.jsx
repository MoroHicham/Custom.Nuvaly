import React, {useContext } from 'react';
import GlobalContext from '~/containers/globalContext';
import GridCard from '../content/GridCard';
export default function ListView({isMobile}) {

    // Current Context
    const { args2 } = useContext(GlobalContext);
   
    return (
        <div className="flex flex-row flex-wrap ">
            { args2.products.nodes.map((item, index) => (
               <GridCard key={index} product={item} isMobile={isMobile} />
            ))}
        </div>
    );
}
