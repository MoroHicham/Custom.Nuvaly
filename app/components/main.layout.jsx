
import { useState, useRef } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {CategoryTitle} from "./header/categoryTitle";
import AnnouncementBar from "./header/announcementBar";
import MenuIcons from "./header/menuIcons";
import Logo from "./header/logo";
import HeaderDescription from "./header/headerDescription";

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

            {/* Header Section  - start */}
            <header className="flex flex-col space-y-1 bg-white">
                <AnnouncementBar />
                <div className="flex flex-row justify-between">
                    <Logo />
                    <Bars3Icon className="h-8 w-8 text-gray-950 max-[750px]:visible min-[750px]:hidden mt-[10px]" onClick={() => handleOnClick()} />
                    <MenuIcons />
                </div>
                <div ref={iconRef} className="laptop:flex laptop:flex-row laptop:justify-items-start tablet:flex tablet:flex-row tablet:justify-items-start max-[750px]:hidden" style={{ display: divVisibility }}>
                    <CategoryTitle categoryName={'Maison, Cuisine & Bureaux'} Character={'M'} />
                    <CategoryTitle categoryName={'Bébé & Jouets'} Character={'J'} />
                    <CategoryTitle categoryName={'Sports & Loisirs'} Character={'S'} />
                    <CategoryTitle categoryName={'Beauté & Santé'} Character={'B'} />
                </div>
                <div className="border-t border-gray-950 max-[750px]:hidden"></div>
                <HeaderDescription />
            </header>
            {/* Header Section  - end */}

            <main>
                {/* Body Contents - start */}
                {children}
                {/* Body Contents - End */}
            </main>

            {/* Footer Section - start */}
            <footer>
                {/* Footer Contents */}
            </footer>
            {/* Footer Section - end */}
        </div>
    );
}