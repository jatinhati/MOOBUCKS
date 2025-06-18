import { motion } from 'framer-motion';

interface LocationCardProps {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  hours: {
    day: string;
    open: string;
    close: string;
  }[];
  image: string;
  hasWifi: boolean;
  hasDriveThru: boolean;
  hasSeating: boolean;
}

const LocationCard = ({
  // id is used as a key elsewhere
  name,
  address,
  city,
  state,
  zip,
  phone,
  hours,
  image,
  hasWifi,
  hasDriveThru,
  hasSeating,
}: LocationCardProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{name}</h3>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <p className="text-gray-700">{address}</p>
          <p className="text-gray-700">{city}, {state} {zip}</p>
          <p className="text-gray-700">{phone}</p>
        </div>
        
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-2">Hours</h4>
          <div className="grid grid-cols-2 gap-1 text-sm">
            {hours.map((hour) => (
              <div key={hour.day} className="flex justify-between col-span-2">
                <span className="font-medium">{hour.day}</span>
                <span>{hour.open} - {hour.close}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-bold text-gray-900 mb-2">Amenities</h4>
          <div className="flex flex-wrap gap-2">
            {hasWifi && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                WiFi
              </span>
            )}
            {hasDriveThru && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Drive-Thru
              </span>
            )}
            {hasSeating && (
              <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                Indoor Seating
              </span>
            )}
          </div>
        </div>
        
        <div className="flex space-x-2">
          <button className="flex-1 bg-moobucks-green hover:bg-moobucks-dark text-white font-medium py-2 px-4 rounded transition-colors">
            Get Directions
          </button>
          <button className="flex-1 border border-moobucks-green text-moobucks-green hover:bg-moobucks-green hover:text-white font-medium py-2 px-4 rounded transition-colors">
            Order Ahead
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default LocationCard;