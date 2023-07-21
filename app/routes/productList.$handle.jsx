import BottomBar from "../components/content/bottomBar";
import { useState, useCallback } from 'react';
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import ListView from "../components/content/ListView";
import GridView from "../components/content/GridView";
import { useEffect } from "react";
import Example from "../components/content/Example";
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
                <img src="https://cdn.shopify.com/s/files/1/0791/4215/8631/files/headProductListPic.png?v=1689906598" alt="Your Alt Text" className="w-[55%]" />
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
                    <Example isMobile={isMobile} isGridView={isGridView} />
                </div>
                {/* Product List  - Start  */}
            </div>
            <BottomBar />
        </div>
    );
}




