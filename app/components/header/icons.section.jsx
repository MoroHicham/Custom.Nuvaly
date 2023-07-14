import { MagnifyingGlassIcon, UserIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

export default function IconSection() {
    return (
        <div className="flex flex-row items-center justify-center pr-5">
            <MagnifyingGlassIcon className="h-6 w-6 text-black max-[750px]:hidden" />
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-black font-medium rounded-lg text-sm px-4 py-2.5 max-[750px]:hidden text-center inline-flex items-center" type="button">Français <svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 max-[750px]:hidden">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    <li>
                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                    </li>
                </ul>
            </div>
            <UserIcon className="h-6 w-6 text-black max-[750px]:hidden" />
            <ShoppingCartIcon className="h-6 w-6 text-black ml-3" />
            <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
           
        </div>
    );
}
