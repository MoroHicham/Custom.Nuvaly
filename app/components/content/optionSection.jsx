import { TruckIcon } from "@heroicons/react/24/outline";
import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { MegaphoneIcon } from "@heroicons/react/24/outline";
import useIsMobileHook from "~/hooks/isMobileHook";

export default function OptionSection({ iconName, title, description, isBordered }) {
    
    const {isMobile}=useIsMobileHook();

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