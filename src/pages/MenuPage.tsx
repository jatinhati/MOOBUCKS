import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ui/ProductCard';
import { heroImages, menuImages, getPlaceholderImage } from '../utils/placeholderImages';
import { useCart } from '../context/CartContext';

// Menu items data
const menuItems = [
  {
    id: '1',
    name: 'Signature Moobucks Latte',
    description: 'Our signature espresso blend with steamed milk and our secret vanilla syrup.',
    price: 450,
    image: getPlaceholderImage(menuImages.hotCoffee1),
    category: 'Coffee Drinks',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Caramel Macchiato',
    description: 'Rich espresso with vanilla syrup, steamed milk, and caramel drizzle.',
    price: 520,
    image: getPlaceholderImage(menuImages.hotCoffee2),
    category: 'Coffee Drinks',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Iced Cold Brew',
    description: 'Smooth cold brew coffee served over ice with your choice of milk.',
    price: 380,
    image: getPlaceholderImage(menuImages.coldCoffee1),
    category: 'Cold Beverages',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Mocha Frappé',
    description: 'Blended coffee with chocolate syrup, milk, and whipped cream.',
    price: 490,
    image: getPlaceholderImage(menuImages.coldCoffee2),
    category: 'Cold Beverages',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Croissant Sandwich',
    description: 'Buttery croissant with scrambled eggs, cheese, and your choice of ham or bacon.',
    price: 650,
    image: getPlaceholderImage(menuImages.pastry1),
    category: 'Food',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Green Tea Latte',
    description: 'Premium matcha powder with steamed milk and a touch of honey.',
    price: 420,
    image: getPlaceholderImage(menuImages.tea1),
    category: 'Tea & Others',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Classic Americano',
    description: 'Rich espresso shots with hot water for a smooth, bold coffee experience.',
    price: 320,
    image: getPlaceholderImage(menuImages.hotCoffee1),
    category: 'Coffee Drinks',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '8',
    name: 'Blueberry Muffin',
    description: 'Freshly baked muffin with juicy blueberries and a golden top.',
    price: 280,
    image: getPlaceholderImage(menuImages.pastry2),
    category: 'Food',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '9',
    name: 'Chai Tea Latte',
    description: 'Spiced black tea with steamed milk and a blend of aromatic spices.',
    price: 400,
    image: getPlaceholderImage(menuImages.tea2),
    category: 'Tea & Others',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '10',
    name: 'Vanilla Iced Coffee',
    description: 'Cold brew coffee with vanilla syrup, milk, and ice.',
    price: 360,
    image: getPlaceholderImage(menuImages.coldCoffee1),
    category: 'Cold Beverages',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '11',
    name: 'Avocado Toast',
    description: 'Artisanal bread topped with fresh avocado, cherry tomatoes, and a sprinkle of sea salt.',
    price: 580,
    image: getPlaceholderImage(menuImages.pastry1),
    category: 'Food',
    isNew: true,
    isFeatured: false,
  },
  {
    id: '12',
    name: 'Hot Chocolate',
    description: 'Rich and creamy hot chocolate topped with whipped cream and marshmallows.',
    price: 380,
    image: getPlaceholderImage(menuImages.seasonal1),
    category: 'Tea & Others',
    isNew: false,
    isFeatured: false,
  },
];

// Menu categories
const categories = [
  { id: 'all', name: 'All Items' },
  { id: 'Coffee Drinks', name: 'Coffee Drinks' },
  { id: 'Cold Beverages', name: 'Cold Beverages' },
  { id: 'Tea & Others', name: 'Tea & Others' },
  { id: 'Food', name: 'Food' },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter menu items based on category and search term
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item) => {
    addToCart(item);
    setToast(`${item.name} added to cart!`);
    setTimeout(() => setToast(null), 2000);
  };

  return (
    <div className="pt-16">
      {toast && (
        <div className="fixed bottom-8 left-1/2 z-50 w-fit max-w-xs flex items-center gap-3 bg-white text-moobucks-green px-6 py-4 rounded-xl shadow-2xl border border-moobucks-green animate-cute-toast font-semibold text-lg justify-center pointer-events-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>{toast}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={getPlaceholderImage(heroImages.shop)}
            alt="Moobucks Menu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Menu
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our carefully crafted beverages and delicious food items, made with love and premium ingredients.
          </motion.p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search menu items..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-moobucks-green"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeCategory === category.id
                        ? 'bg-moobucks-green text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Menu Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <ProductCard 
                  key={item.id}
                  {...item}
                  onAddToCart={() => handleAddToCart(item)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No menu items found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;