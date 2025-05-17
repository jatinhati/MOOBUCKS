import { motion } from 'framer-motion';

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  allergens?: string[];
}

const MenuItemCard = ({
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isPopular = false,
  allergens = [],
}: MenuItemCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="md:w-1/3">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 md:h-full object-cover"
        />
      </div>
      <div className="p-4 md:w-2/3">
        <div className="flex justify-between items-start">
          <div>
            <div className="text-xs text-gray-500 uppercase mb-1">{category}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
          </div>
          <div className="text-moobucks-green font-bold text-lg">${price.toFixed(2)}</div>
        </div>
        
        <p className="text-gray-600 mb-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {isNew && (
            <span className="bg-moobucks-gold text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </span>
          )}
          {isPopular && (
            <span className="bg-moobucks-green text-white text-xs font-bold px-2 py-1 rounded">
              POPULAR
            </span>
          )}
          {allergens.length > 0 && (
            <div className="text-xs text-gray-500">
              <span className="font-semibold">Allergens:</span> {allergens.join(', ')}
            </div>
          )}
        </div>
        
        <div className="flex justify-end">
          <button 
            className="bg-moobucks-green hover:bg-moobucks-dark text-white text-sm font-medium px-4 py-2 rounded transition-colors"
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItemCard;