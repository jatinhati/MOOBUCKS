import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFeatured?: boolean;
}

const ProductCard = ({
  id,
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isFeatured = false,
}: ProductCardProps) => {
  return (
    <motion.div 
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link to={`/shop/product/${id}`}>
        <div className="relative">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-64 object-cover"
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-moobucks-gold text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
          {isFeatured && (
            <div className="absolute top-2 left-2 bg-moobucks-green text-white text-xs font-bold px-2 py-1 rounded">
              FEATURED
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 uppercase mb-1">{category}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-moobucks-green font-bold">${price.toFixed(2)}</span>
            <button 
              className="bg-moobucks-green hover:bg-moobucks-dark text-white text-sm font-medium px-3 py-1 rounded transition-colors"
              onClick={(e) => {
                e.preventDefault();
                // Add to cart functionality will be implemented later
                console.log(`Added ${name} to cart`);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;