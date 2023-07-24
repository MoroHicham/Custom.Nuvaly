import { Fragment, useState } from 'react'
import  FilterButton  from '../button/filterButton';
import  GridViewButton  from '../button/gridViewButton';
import MobileTransitionRoot from '../button/mobileTransitionRoot';
import Badge from "../button/badge";
import GridView from "./GridView";
import ListView from "./ListView";
import NoFound from "../message/noFound";
import MenuFilter from '../button/menuFilter';

// Global as a context
import GlobalContext from "~/containers/globalContext";

const sortOptions = [
  { name: 'Most Popular', href: '#', current: true },
  { name: 'Best Rating', href: '#', current: false },
  { name: 'Newest', href: '#', current: false },
  { name: 'Price: Low to High', href: '#', current: false },
  { name: 'Price: High to Low', href: '#', current: false },
]
const subCategories = [
  { name: 'Totes', href: '#' },
  { name: 'Backpacks', href: '#' },
  { name: 'Travel Bags', href: '#' },
  { name: 'Hip Bags', href: '#' },
  { name: 'Laptop Sleeves', href: '#' },
]
const filters = [
  {
    id: 'color',
    name: 'Color',
    options: [
      { value: 'white', label: 'White', checked: false },
      { value: 'beige', label: 'Beige', checked: false },
      { value: 'blue', label: 'Blue', checked: true },
      { value: 'brown', label: 'Brown', checked: false },
      { value: 'green', label: 'Green', checked: false },
      { value: 'purple', label: 'Purple', checked: false },
    ],
  },
  {
    id: 'category',
    name: 'Category',
    options: [
      { value: 'new-arrivals', label: 'New Arrivals', checked: false },
      { value: 'sale', label: 'Sale', checked: false },
      { value: 'travel', label: 'Travel', checked: true },
      { value: 'organization', label: 'Organization', checked: false },
      { value: 'accessories', label: 'Accessories', checked: false },
    ],
  },
  {
    id: 'size',
    name: 'Size',
    options: [
      { value: '2l', label: '2L', checked: false },
      { value: '6l', label: '6L', checked: false },
      { value: '12l', label: '12L', checked: false },
      { value: '18l', label: '18L', checked: false },
      { value: '20l', label: '20L', checked: false },
      { value: '40l', label: '40L', checked: true },
    ],
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export default function ProductListView({ isMobile, productCollection }) {

  // Define the state or data you want to pass through context
  const [args2, setArgs2] = useState(productCollection);


  // Replace the character you want to remove (e.g., "a") with an empty string
  const removedCharString = args2.handle.replace(/-/g, ' ');
  // Convert the first letter to uppercase
  const handlePhrase = removedCharString.charAt(0).toUpperCase() + removedCharString.slice(1);

  const [isGridView, setIsGridView] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const toggleView = () => {
    setIsGridView((prevIsGridView) => !prevIsGridView);
  };
  let defaultColorSelect = false;
  const textColor = isHovered ? 'text-orange-600' : 'text-gray-500';
  const handleMouseEnter = () => {
    defaultColorSelect = false;
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    defaultColorSelect = true;
    setIsHovered(false);
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  return (

    <div className="bg-white">
      <div>

        {/* Mobile filter dialog - start */}
        <MobileTransitionRoot
          mobileFiltersOpen={mobileFiltersOpen}
          Fragment={Fragment}
          setMobileFiltersOpen={setMobileFiltersOpen}
          subCategories={subCategories}
          filters={filters} />
        {/* Mobile filter dialog - end */}

        <main className="">
          <div className="flex items-baseline justify-between flex-wrap border-b bg-white border-gray-200 pb-6 pt-0 gap-y-2">

            <div className='flex-row flex-wrap justify-center gap-2'>
              <Badge data={`${args2.products.nodes.length} Résultat`} />
              <Badge data={`${handlePhrase}`} color={'bg-purple-400'} />
            </div>

            <div className="flex items-center">
              <MenuFilter Fragment={Fragment} sortOptions={sortOptions} classNames={classNames} />
              <GridViewButton isMobile={isMobile} toggleView={toggleView} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} defaultColorSelect={defaultColorSelect} textColor={textColor} />
              <FilterButton setMobileFiltersOpen={setMobileFiltersOpen} isMobile={isMobile} />
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              <div className="lg:col-span-3">
                <GlobalContext.Provider value={{ args2 }}>
                  {
                    args2.products.nodes.length > 0
                        ? isMobile
                        ? <GridView isMobile={true} />
                        : !isMobile && isGridView ? <GridView isMobile={false} />
                        : <ListView />
                        : <NoFound message={`Nous sommes désolés, mais nous n'avons trouvé aucun produit dans cette catégorie pour le moment. Veuillez vérifier ultérieurement ou explorez nos autres catégories pour trouver ce que vous cherchez. Si vous avez des questions, n'hésitez pas à nous contacter. Nous sommes là pour vous aider !`} />
                      }
                </GlobalContext.Provider>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}