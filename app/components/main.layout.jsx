import { useState, useRef,useEffect } from "react";
import AnnouncementBar from "./header/announcement.bar";
import { CategorySection } from "./header/category.section";
import IconSection from "./header/icons.section";
import MainHeader from "./header/main.header";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HeaderDescription from "./header/header.description";

// Basic main layout , this layout should be called from root.jsx
export default function MainLayout({ children, title }) {
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


    // Css attributes declaration, initial width and height values.
    const dynamicLaptopAndMobileVersion = {
        mobileVersion : {
            width: isMobile ? "100px" : "200px",
            height: isMobile ? "100px" : "200px",
            lineHeight: isMobile ? "20%" : "50%",
        }
    }

    // Dynamic css class for Mobile and Laptop version
    const circleStyle= {
        ctrs : {
             display: "flex",
             width: dynamicLaptopAndMobileVersion.mobileVersion.width,
             height: dynamicLaptopAndMobileVersion.mobileVersion.height,
             lineHeight: dynamicLaptopAndMobileVersion.mobileVersion.lineHeight,
             border: "2px solid rgb(180, 178, 178)",
             borderRadius:"50%",
             textAlign: "center !important",
             verticalAlign: "middle",
             justifyContent: "center",
             alignItems: "center",
             overflow: "visible"
        }
    }


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
        <div className="">
            <header className="flex flex-col space-y-1">

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
                <div className="pl-10 overflow-visible opacity-70">
                    <div className="laptop:text-[15px] max-[750px]:text-[8px] min-[750px]:text-[8px] transform origin-top-right -rotate-12 font-bold" style={circleStyle.ctrs}>/FEEL THE MOMENT</div>
                </div>
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