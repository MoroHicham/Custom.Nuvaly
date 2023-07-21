import { useEffect, useState } from "react";

const useIsMobileHook = () => {
    // Use state for detecting mobile version
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
    return {isMobile};
}

export default useIsMobileHook;
