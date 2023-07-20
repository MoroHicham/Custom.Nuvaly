import BottomBar from "../components/content/bottomBar";
import { useState, useCallback } from 'react';
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import ListView from "../components/content/ListView";
import GridView from "../components/content/GridView";
import { useEffect } from "react";
export default function ProductList() {

    const [isHovered, setIsHovered] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Option 1');
    const [isGridView, setIsGridView] = useState(true);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            const screenWidth = window.innerWidth;
            setIsMobile(screenWidth < 768); // Adjust the breakpoint as per your needs
        };

        // Check screen size on initial component mount
        checkScreenSize();

        // Add event listener to recheck screen size on window resize
        window.addEventListener('resize', checkScreenSize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const toggleView = () => {
        setIsGridView((prevIsGridView) => !prevIsGridView);
        console.log(isMobile,isGridView);
    };
    

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    };

    let defaultColorSelect=false;
    const textColor = isHovered ? 'text-orange-600' : 'text-gray-500';
    const handleMouseEnter = () => {
        defaultColorSelect=false;
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        defaultColorSelect=true;
        setIsHovered(false);
    };

    return (
        <div className="flex flex-col justify-center">
           
            <div className="pt-3 font-bold text-gray-600">{`TOUS LES PRODUITS`}</div> 
            
            <div className="flex flex-row gap-x-2 justify-center">
                {/* Side Bar - Start  */}
                { !isMobile ?
                    <div className="flex flex-row gap-1 justify-center  bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-wrap basis-[20%]">
                        <div>Filter</div>
                    </div>
                 : null}
                {/* Side Bar - End  */}
                {/* Product List  - Start  */}
                <div className={`flex flex-col gap-1 justify-center bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5 flex-wrap ${ !isMobile ? 'basis-[75%]' : 'basis-[100%]' }`}>
                    <div className="flex flex-row justify-end">
                        <div className="p-2">
                            <div className="flex items-center mb-4">
                                <select
                                    value={selectedOption}
                                    onChange={handleSelectChange}
                                    className="block appearance-none w-[15.8rem] border-none bg-white border border-gray-300 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500"
                                >
                                    <option value="option 1">Trier par: Les plus demandés</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between border border-b-2 p-2">
                        <p className="text-sm">2456 Résultats</p>
                        <div className="flex flex-row pr-8">
                           <button 
                            onClick={toggleView}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}><RectangleGroupIcon className={`h-7 w-7 ${ defaultColorSelect ? textColor : 'text-orange-600'}`} /></button>
                           <button
                           onClick={toggleView}
                           onMouseEnter={handleMouseEnter}
                           onMouseLeave={handleMouseLeave}><ListBulletIcon className={`h-7 w-7 ${ !defaultColorSelect ? textColor : 'text-orange-600'}`} /></button> 
                        </div>
                    </div>
                    { isMobile ?  <GridView isMobile={true}/> : !isMobile && isGridView ? <GridView isMobile={false}/> : <ListView /> }
                </div>
                {/* Product List  - Start  */}
            </div>
            <BottomBar />
        </div>
    );
}




 