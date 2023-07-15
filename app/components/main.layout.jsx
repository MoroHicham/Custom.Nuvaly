import { useState, useRef,useEffect } from "react";
import AnnouncementBar from "./header/announcement.bar";
import { CategorySection } from "./header/category.section";
import IconSection from "./header/icons.section";
import MainHeader from "./header/main.header";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HeaderDescription from "./header/header.description";

// Basic main layout , this layout should be called from root.jsx
export default function MainLayout({ children, title }) {



    // Create a functional component that allows us to change the state of the menu bar in case of Mobile version.
    const [divVisibility, setDivVisibility] = useState('hidden');


    const iconRef = useRef(null);

    // Handle onClick Event 
    const handleOnClick = () => {
        const divStyle = window.getComputedStyle(iconRef.current);
        const displayValue = divStyle.getPropertyValue('display');

        // Check if already visible
        const selectedValue = displayValue == 'block' ? 'none' : 'block';

        setDivVisibility(selectedValue);
    }

    return (
        <div className="bg-[#ECECEC]">
            <header className="flex flex-col space-y-1 bg-white">

                {/* Top Header Section - Start */}
                <AnnouncementBar />
                <div className="flex flex-row justify-between">
                    <MainHeader />
                    <Bars3Icon className="h-8 w-8 text-gray-950 max-[750px]:visible min-[750px]:hidden mt-[10px]" onClick={() => handleOnClick()} />
                    <IconSection />
                </div>
                <div ref={iconRef} className="laptop:flex laptop:flex-row laptop:justify-items-start tablet:flex tablet:flex-row tablet:justify-items-start max-[750px]:hidden" style={{ display: divVisibility }}>
                    <CategorySection categoryName={'Maison, Cuisine & Bureaux'} Character={'M'} />
                    <CategorySection categoryName={'Bébé & Jouets'} Character={'J'} />
                    <CategorySection categoryName={'Sports & Loisirs'} Character={'S'} />
                    <CategorySection categoryName={'Beauté & Santé'} Character={'B'} />
                </div>

                <div className="border-t border-gray-950 max-[750px]:hidden"></div>
                {/* Top Header Section - End */}

                {/* Main Header - Start */}
                <HeaderDescription />
                
                {/* Main Header - End */}
            </header>
            <main>
                {children}
              
            </main>
            <footer>
            </footer>
        </div>
    );
}