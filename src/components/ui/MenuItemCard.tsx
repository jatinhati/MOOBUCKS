import React from 'react';

interface MenuItemCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
  onAddToCart?: () => void;
}

const MenuItemCard = React.memo(({
  name,
  description,
  price,
  image,
  category,
  isNew = false,
  isPopular = false,
  onAddToCart,
}: MenuItemCardProps) => {
  return (
    <div className="product-card shadow">
      <div>
        <div className="relative">
          <img 
            src={image || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93'} 
            alt={name} 
            className="w-full h-64 object-cover"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1509042239860-f550ce710b93';
            }}
          />
          {isNew && (
            <div className="absolute top-2 right-2 bg-moobucks-gold text-white text-xs font-bold px-2 py-1 rounded">
              NEW
            </div>
          )}
          {isPopular && (
            <div className="absolute top-2 left-2 bg-moobucks-green text-white text-xs font-bold px-2 py-1 rounded">
              POPULAR
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 uppercase mb-1">{category}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
          <div className="flex justify-between items-center">
            <span className="text-moobucks-green font-bold">
              ₹{price.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
            </span>
            <button 
              type="button"
              className="bg-moobucks-green hover:bg-moobucks-dark text-white text-base font-bold px-6 py-2 rounded transition-colors"
              onClick={onAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default MenuItemCard; 