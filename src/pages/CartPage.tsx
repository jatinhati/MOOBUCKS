import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { AnimatePresence, motion } from 'framer-motion';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.05; // Mock 5% tax
  const total = subtotal + taxes;

  return (
    <div className="bg-gradient-to-br from-[#f8f6f1] via-[#e8e6e1] to-white min-h-[80vh]">
      <div className="container-custom py-16">
      <h1 className="pt-12 text-3xl md:text-4xl font-bold mb-8 text-center text-moobucks-dark tracking-tight">
  Your Shopping Cart
</h1>

        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-gray-500 py-16 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4 text-moobucks-green/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A2 2 0 007.48 19h9.04a2 2 0 001.83-1.3L21 13M7 13V6a1 1 0 011-1h5m-6 8h8" /></svg>
            </motion.div>
            <p className="text-xl mb-2">Your cart is empty.</p>
            <p className="max-w-md mb-4">Looks like you haven't added anything to your cart yet. Let's find something you'll love!</p>
            <Link to="/menu">
              <button className="bg-moobucks-green text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-moobucks-dark transition-colors">
                Explore Our Menu
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <AnimatePresence>
                {cart.map(item => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="flex flex-col md:flex-row items-center bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-4 gap-4"
                  >
                    <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg border" />
                    <div className="flex-1 w-full text-center md:text-left">
                      <h2 className="text-lg font-bold text-moobucks-dark">{item.name}</h2>
                      <div className="text-gray-500 text-sm">₹{item.price.toLocaleString('en-IN')} each</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 bg-gray-200 text-lg rounded-full hover:bg-moobucks-green hover:text-white transition-colors">-</button>
                      <span className="px-3 text-lg font-medium w-10 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 bg-gray-200 text-lg rounded-full hover:bg-moobucks-green hover:text-white transition-colors">+</button>
                    </div>
                    <div className="text-lg font-bold text-moobucks-dark w-24 text-center">₹{(item.price * item.quantity).toLocaleString('en-IN')}</div>
                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 p-2 rounded-full transition-colors" title="Remove">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            {/* Summary Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 h-fit sticky top-24">
              <h2 className="text-2xl font-bold mb-4 text-moobucks-dark border-b pb-3">Order Summary</h2>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between">
                  <span>Taxes & Fees</span>
                  <span>₹{taxes.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold my-4 pt-4 border-t">
                <span>Total</span>
                <span>₹{total.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</span>
              </div>
              <button className="w-full bg-gradient-to-r from-moobucks-green to-moobucks-gold hover:from-moobucks-gold hover:to-moobucks-green text-white py-3 rounded-lg font-bold text-lg shadow-md hover:shadow-lg transition-all">
                Proceed to Checkout
              </button>
              <Link to="/menu" className="block text-center text-moobucks-green mt-4 hover:underline">
                or Continue Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage; 