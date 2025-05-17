import { useState } from 'react';
import { motion } from 'framer-motion';
import MenuItemCard from '../components/ui/MenuItemCard';

// Sample menu data
const menuCategories = [
  { id: 'hot-coffee', name: 'Hot Coffee' },
  { id: 'cold-coffee', name: 'Cold Coffee' },
  { id: 'tea', name: 'Tea' },
  { id: 'pastries', name: 'Pastries & Snacks' },
  { id: 'seasonal', name: 'Seasonal Specials' },
];

const menuItems = [
  {
    id: '1',
    name: 'Classic Moobucks Latte',
    description: 'Our signature espresso with steamed milk and a light layer of foam. Available in various flavors.',
    price: 4.25,
    image: '/src/assets/images/menu-latte.jpg',
    category: 'hot-coffee',
    isPopular: true,
    allergens: ['Milk'],
  },
  {
    id: '2',
    name: 'Caramel Macchiato',
    description: 'Espresso with vanilla-flavored syrup, steamed milk, and caramel drizzle.',
    price: 4.75,
    image: '/src/assets/images/menu-macchiato.jpg',
    category: 'hot-coffee',
    isPopular: true,
    allergens: ['Milk'],
  },
  {
    id: '3',
    name: 'Americano',
    description: 'Espresso shots topped with hot water to produce a light layer of crema.',
    price: 3.25,
    image: '/src/assets/images/menu-americano.jpg',
    category: 'hot-coffee',
    allergens: [],
  },
  {
    id: '4',
    name: 'Cold Brew',
    description: 'Coffee grounds steeped in cold water for 20 hours to create a smooth, rich flavor.',
    price: 3.95,
    image: '/src/assets/images/menu-coldbrew.jpg',
    category: 'cold-coffee',
    isPopular: true,
    allergens: [],
  },
  {
    id: '5',
    name: 'Iced Caramel Latte',
    description: 'Our signature espresso over ice with milk and caramel syrup.',
    price: 4.50,
    image: '/src/assets/images/menu-icedlatte.jpg',
    category: 'cold-coffee',
    allergens: ['Milk'],
  },
  {
    id: '6',
    name: 'Moobucks Frappuccino',
    description: 'Blended coffee with milk, ice, and your choice of flavors, topped with whipped cream.',
    price: 5.25,
    image: '/src/assets/images/menu-frappuccino.jpg',
    category: 'cold-coffee',
    isPopular: true,
    allergens: ['Milk'],
  },
  {
    id: '7',
    name: 'Chai Tea Latte',
    description: 'Black tea infused with cinnamon, clove, and other warming spices combined with steamed milk.',
    price: 4.25,
    image: '/src/assets/images/menu-chai.jpg',
    category: 'tea',
    allergens: ['Milk'],
  },
  {
    id: '8',
    name: 'Green Tea',
    description: 'Pure green tea leaves steeped in hot water for a refreshing, delicate flavor.',
    price: 2.95,
    image: '/src/assets/images/menu-greentea.jpg',
    category: 'tea',
    allergens: [],
  },
  {
    id: '9',
    name: 'Butter Croissant',
    description: 'Flaky, buttery layers make this classic croissant a perfect companion to your coffee.',
    price: 2.95,
    image: '/src/assets/images/menu-croissant.jpg',
    category: 'pastries',
    allergens: ['Wheat', 'Milk', 'Eggs'],
  },
  {
    id: '10',
    name: 'Blueberry Muffin',
    description: 'Moist muffin filled with juicy blueberries and topped with a sugar streusel.',
    price: 3.25,
    image: '/src/assets/images/menu-muffin.jpg',
    category: 'pastries',
    allergens: ['Wheat', 'Milk', 'Eggs'],
  },
  {
    id: '11',
    name: 'Pumpkin Spice Latte',
    description: 'Our signature espresso with pumpkin spice syrup, steamed milk, and topped with whipped cream and pumpkin pie spices.',
    price: 5.25,
    image: '/src/assets/images/menu-psl.jpg',
    category: 'seasonal',
    isNew: true,
    allergens: ['Milk'],
  },
  {
    id: '12',
    name: 'Peppermint Mocha',
    description: 'Espresso with rich chocolate, peppermint syrup, steamed milk, and topped with whipped cream and chocolate curls.',
    price: 5.25,
    image: '/src/assets/images/menu-peppermint.jpg',
    category: 'seasonal',
    isNew: true,
    allergens: ['Milk'],
  },
];

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('hot-coffee');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/src/assets/images/menu-hero.jpg" 
            alt="Our Menu" 
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
            className="text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Explore our handcrafted beverages and delicious food items
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="w-full md:w-1/3">
                <input
                  type="text"
                  placeholder="Search menu items..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-moobucks-green"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex items-center">
                <span className="text-gray-700 mr-2">Filter by:</span>
                <button
                  className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
                    activeCategory === 'all' 
                      ? 'bg-moobucks-green text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                  onClick={() => setActiveCategory('all')}
                >
                  All
                </button>
                {menuCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`px-3 py-1 rounded-md text-sm font-medium mr-2 ${
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

          {/* Menu Items */}
          <div className="space-y-6">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <MenuItemCard 
                  key={item.id}
                  {...item}
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No menu items found. Try adjusting your search.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Nutrition & Allergen Information */}
      <section className="section-padding bg-moobucks-cream">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-moobucks-dark mb-4 text-center">Nutrition & Allergen Information</h2>
            <p className="text-gray-700 mb-6 text-center">
              We're committed to providing you with detailed information about our menu items to help you make informed choices.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-moobucks-dark mb-4">Common Allergens</h3>
              <p className="text-gray-700 mb-4">
                Our menu items may contain or come into contact with the following allergens:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-100 p-3 rounded-md text-center">
                  <span className="font-medium">Milk</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-md text-center">
                  <span className="font-medium">Eggs</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-md text-center">
                  <span className="font-medium">Wheat</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-md text-center">
                  <span className="font-medium">Soy</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-md text-center">
                  <span className="font-medium">Tree Nuts</span>
                </div>
                <div className="bg-gray-100 p-3 rounded-md text-center">
                  <span className="font-medium">Peanuts</span>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4">
                For detailed nutrition information and allergen details for specific menu items, please ask our staff or visit our nutrition page.
              </p>
              
              <div className="flex justify-center">
                <button className="bg-moobucks-green hover:bg-moobucks-dark text-white font-medium py-2 px-4 rounded transition-colors">
                  View Full Nutrition Guide
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-moobucks-dark mb-4">Customize Your Drink</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Make your MOOBUCKS experience uniquely yours with our range of customization options.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-moobucks-dark mb-4">Milk Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Whole Milk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  2% Milk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Nonfat Milk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Almond Milk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Oat Milk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Coconut Milk
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Soy Milk
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-moobucks-dark mb-4">Flavor Syrups</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Vanilla
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Caramel
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Hazelnut
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Chocolate
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cinnamon Dolce
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Toffee Nut
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Seasonal Flavors
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-moobucks-dark mb-4">Toppings & Extras</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Whipped Cream
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Caramel Drizzle
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Chocolate Drizzle
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Cinnamon Powder
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Chocolate Curls
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Extra Espresso Shot
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-moobucks-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sugar-Free Options
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuPage;