

// Entry Point Index for Main Layout

import { useEffect, useState } from "react";
import OptionSection from "../components/content/options.section";
export default function Index() {
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

            {/* Product Section - Start */}
            <div className="flex flex-row flex-wrap justify-center bg-white shadow shadow-lg shadow-bottom-gray-500 shadow-top-gray-500 mt-5">
           
                {/* Current update */}
            </div>
            {/* Product Section - End */}

        </section>
    );
}