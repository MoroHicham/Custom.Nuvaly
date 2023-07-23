import React from "react";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { ListBulletIcon } from "@heroicons/react/24/outline";
export default function GridViewButton({
    isMobile,
    toggleView,
    handleMouseEnter,
    handleMouseLeave,
    defaultColorSelect,
    textColor
}) {
    return <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
        <span className="sr-only">View grid</span>
        {!isMobile ? <div className="flex flex-row pr-1">
            <button onClick={toggleView} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><RectangleGroupIcon className={`h-7 w-7 ${defaultColorSelect ? textColor : 'text-orange-600'}`} /></button>
            <button onClick={toggleView} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><ListBulletIcon className={`h-7 w-7 ${!defaultColorSelect ? textColor : 'text-orange-600'}`} /></button>
        </div> : null}
    </button>;
}
