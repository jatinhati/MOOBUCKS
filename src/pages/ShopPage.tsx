import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ui/ProductCard';
import { heroImages, productImages, getPlaceholderImage } from '../utils/placeholderImages';
import { useCart } from '../context/CartContext';

// Shop products data
const shopProducts = [
  {
    id: '1',
    name: 'Signature Blend Coffee',
    description: 'Our signature blend with notes of chocolate, caramel, and a hint of citrus.',
    price: 1299,
    image: getPlaceholderImage(productImages.coffee1),
    category: 'Coffee Beans',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '2',
    name: 'Moobucks Tumbler',
    description: 'Double-walled stainless steel tumbler with our iconic logo.',
    price: 1799,
    image: getPlaceholderImage(productImages.merchandise1),
    category: 'Merchandise',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Cold Brew Kit',
    description: 'Everything you need to make perfect cold brew coffee at home.',
    price: 2499,
    image: getPlaceholderImage(productImages.equipment1),
    category: 'Brewing Equipment',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '4',
    name: 'Ethiopian Single Origin',
    description: 'Bright and fruity with notes of blueberry and citrus. A light roast perfect for pour-over.',
    price: 1499,
    image: getPlaceholderImage(productImages.coffee2),
    category: 'Coffee Beans',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Ceramic Pour-Over Set',
    description: 'Handcrafted ceramic pour-over dripper with matching mug. Elegant and functional.',
    price: 2999,
    image: getPlaceholderImage(productImages.equipment2),
    category: 'Brewing Equipment',
    isNew: false,
    isFeatured: true,
  },
  {
    id: '6',
    name: 'Moobucks Travel Mug',
    description: 'Leak-proof travel mug with temperature control technology. Keeps drinks hot for 12 hours.',
    price: 1599,
    image: getPlaceholderImage(productImages.merchandise2),
    category: 'Merchandise',
    isNew: true,
    isFeatured: true,
  },
  {
    id: '7',
    name: 'Dark Roast Espresso Blend',
    description: 'Bold and rich with notes of dark chocolate and caramel. Perfect for espresso machines.',
    price: 1099,
    image: getPlaceholderImage(productImages.coffee3),
    category: 'Coffee Beans',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '8',
    name: 'Moobucks Coffee Mug',
    description: 'Classic ceramic mug with our iconic logo. Perfect for your morning coffee ritual.',
    price: 999,
    image: getPlaceholderImage(productImages.merchandise1),
    category: 'Merchandise',
    isNew: false,
    isFeatured: false,
  },
  {
    id: '9',
    name: 'French Press',
    description: 'Classic stainless steel French press for a rich and full-bodied brew.',
    price: 1999,
    image: getPlaceholderImage(productImages.equipment2),
    category: 'Brewing Equipment',
    isNew: false,
    isFeatured: false,
  },
];

// Product categories
const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'Coffee Beans', name: 'Coffee Beans' },
  { id: 'Merchandise', name: 'Merchandise' },
  { id: 'Brewing Equipment', name: 'Brewing Equipment' },
];

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter products based on category and search term
  const filteredProducts = shopProducts.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`${product.name} added to cart!`);
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
            alt="Shop Moobucks Products" 
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
            Shop Our Products
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Bring the MOOBUCKS experience home with our premium coffee beans, brewing equipment, and merchandise.
          </motion.p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
              <div className="w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search products..."
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

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id}
                  {...product}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-700 mb-4">No products found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;