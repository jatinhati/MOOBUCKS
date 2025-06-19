import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';
import { heroImages, productImages, storyImages, locationImages, getPlaceholderImage } from '../utils/placeholderImages';
import { useEffect, useState } from 'react';

const featuredProducts = [ 
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
];

const HomePage = () => {
  const navigate = useNavigate();
  const [locating, setLocating] = useState(false);
  const [locationError, setLocationError] = useState('');

  const handleFindNearestLocation = () => {
    setLocating(true);
    setLocationError('');
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser.');
      setLocating(false);
      return;
    }
    let didRespond = false;
    const timeout = setTimeout(() => {
      if (!didRespond) {
        setLocating(false);
        setLocationError('Location request timed out. Please try again.');
      }
    }, 10000); // 10 seconds
    navigator.geolocation.getCurrentPosition(
      (position) => {
        didRespond = true;
        clearTimeout(timeout);
        const { latitude, longitude } = position.coords;
        setLocating(false);
        navigate(`/nearest-store?lat=${latitude}&lng=${longitude}`);
      },
      (err) => {
        didRespond = true;
        clearTimeout(timeout);
        setLocating(false);
        if (err.code === 1) {
          setLocationError('Location permission denied. Please allow access and try again.');
        } else {
          setLocationError('Unable to retrieve your location.');
        }
      }
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section className="hero-section">
        <img 
          className="hero-video"
          src={getPlaceholderImage(heroImages.home, 1920, 1080)}
          alt="MOOBUCKS Coffee Experience"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Crafting Moments, One Cup at a Time
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Experience the perfect blend of quality, taste, and atmosphere at MOOBUCKS.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleFindNearestLocation}
              disabled={locating}
            >
              {locating ? 'Locating...' : 'Find Your Nearest Coffee'}
            </Button>
            <Link to="/menu">
              <Button variant="outline" size="lg" className="bg-black/30 border-grren  text-white">
                Explore Our Menu
              </Button>
            </Link>
          </motion.div>
          {locationError && <div className="mt-3 text-red-200 font-medium">{locationError}</div>}
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-moobucks-dark mb-4">Featured Products</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Discover our handpicked selection of premium coffee beans, brewing equipment, and merchandise to enhance your coffee experience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                {...product}
              />
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/shop">
              <Button variant="secondary">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
      <section className="section-padding bg-moobucks-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.img 
                src={getPlaceholderImage(storyImages.about1)}
                alt="About MOOBUCKS" 
                className="rounded-lg shadow-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div>
              <motion.h2 
                className="text-3xl font-bold text-moobucks-dark mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Story
              </motion.h2>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                MOOBUCKS began with a simple idea: create a space where quality coffee brings people together. From our first small shop to our global presence today, we've remained committed to ethically sourced beans, expert roasting, and creating warm, welcoming spaces.
              </motion.p>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Every cup tells a story of the farmers who grew the beans, the roasters who crafted the blend, and the baristas who prepared it with care.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Link to="/our-story">
                  <Button variant="primary">
                    Learn More About Us
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Search Section */}
      <section className="section-padding bg-moobucks-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Find a MOOBUCKS Near You
              </motion.h2>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                With locations across the country, there's always a MOOBUCKS ready to serve you. Use our store locator to find the nearest café, check hours, and get directions.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="text"
                  placeholder="Enter your zip code"
                  className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-moobucks-gold"
                />
                <Button variant="secondary">
                  Search Locations
                </Button>
              </motion.div>
            </div>
            <div>
              <motion.img 
                src={getPlaceholderImage(locationImages.store1)}
                alt="Store locations" 
                className="rounded-lg shadow-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-moobucks-cream">
        <div className="container-custom">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-moobucks-dark mb-4">Stay Connected</h2>
            <p className="text-gray-700 mb-8">
              Subscribe to our newsletter for updates on new products, special offers, and coffee tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-moobucks-green flex-grow max-w-md"
                required
              />
              <Button variant="primary">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;