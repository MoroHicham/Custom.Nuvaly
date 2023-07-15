import { TruckIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function OptionSection({ iconName, title, description, isBordered }) {
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

    const icons = {
        selectedIcon: {
            truck: <TruckIcon className="h-12 w-12 text-gray-500" />,
            fuss: <ArchiveBoxArrowDownIcon className="h-12 w-12 text-gray-500" />,
            promotion: <MegaphoneIcon className="h-12 w-12 text-gray-500" />
        }
    }
    return (
        <>
            <div className={`${isBordered && !isMobile ? 'border-r border-gray-900' : ''} mt-3 mb-3 `}>
                <div className={`flex flex-col items-center pr-6 pl-3 pb-2`}>
                    {icons.selectedIcon[iconName]}
                    <h1 className="font-bold text-[25px]">{title}</h1>
                    <div className="font-arial text-[15px]" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
            </div>
        </>
    );
}