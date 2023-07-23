import {FunnelIcon } from '@heroicons/react/20/solid'
export default function FilterButton({
    setMobileFiltersOpen,
    isMobile
}) {
    return <button type="button" className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden" onClick={() => setMobileFiltersOpen(true)}>
        <span className="sr-only">Filters</span>
        {isMobile ? <FunnelIcon className="h-5 w-5 text-orange-400" aria-hidden="true" /> : null}
    </button>;
}
