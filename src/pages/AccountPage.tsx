import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Story', href: '/our-story' },
  { name: 'Menu', href: '/menu' },
  { name: 'Locations', href: '/locations' },
  { name: 'Shop', href: '/shop' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 '}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                className="h-10 w-auto" 
                src="/src/assets/images/moobucks-logo.svg" 
                alt="MOOBUCKS" 
              />
              <span className={`ml-2 font-bold text-xl text-white '}`}>
                MOOBUCKS
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block w-full">
            <div className="flex items-center justify-between w-full">
              {/* Navigation Links */}
              <div className="flex-1 flex items-center justify-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="uppercase font-bold tracking-wide text-lg text-white hover:text-moobucks-green transition-colors flex items-center"
                  >
                    {item.name}
                    {(item.name === 'SHOP' || item.name === 'CONTACT') && (
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                    )}
                  </Link>
                ))}
              </div>
                <Link to="/account">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    
                    strokeWidth={1.5}
                    width={28}
                    height={28}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Link to="/cart" className="relative ml-4">
                <ShoppingBagIcon 
                  className={`h-6 w-6}`} 
                />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-moobucks-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Link to="/cart" className="relative mr-4">
              <ShoppingBagIcon 
                className={`h-6 w-6 ${scrolled ? 'text-moobucks-green' : 'text-white'}`} 
              />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-moobucks-gold text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md ${
                scrolled 
                  ? 'text-gray-700 hover:text-moobucks-green hover:bg-gray-100' 
                  : 'text-white hover:text-white hover:bg-moobucks-dark'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white shadow-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-moobucks-green hover:bg-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const AccountPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-white">
      <div className="w-full max-w-md p-8 border border-gray-200 rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">LOGIN</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-moobucks-brown" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-moobucks-brown" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link to="#" className="text-sm text-red-600 hover:underline">Forgot your password?</Link>
            <button type="submit" className="w-32 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50 transition">SIGN IN</button>
            <Link to="#" className="text-sm text-red-600 hover:underline mt-2">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;