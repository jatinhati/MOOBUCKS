import { useLocation, Link } from 'react-router-dom';
import { useMemo } from 'react';

// Store type definition
type Store = {
  name: string;
  address: string;
  lat: number;
  lng: number;
  distance?: number;
  phone?: string;
  hours?: { day: string; open: string; close: string }[];
  amenities?: string[];
};

const defaultHours = [
  { day: 'Mon-Fri', open: '7:00 AM', close: '9:00 PM' },
  { day: 'Sat-Sun', open: '8:00 AM', close: '10:00 PM' },
];
const defaultAmenities = ['WiFi', 'Seating', 'Drive-Thru'];

// Sample store locations (only valid Store properties)
const storeLocations: Store[] = [
  {
    name: 'Moobucks Central Mall',
    address: '123 Main St, Central City',
    lat: 28.6139,
    lng: 77.2090,
    phone: '+1 (555) 123-4567',
    hours: defaultHours,
    amenities: ['WiFi', 'Seating', 'Drive-Thru'],
  },
  {
    name: 'Moobucks Riverside',
    address: '456 River Rd, Riverside',
    lat: 28.5355,
    lng: 77.3910,
    phone: '+1 (555) 987-6543',
    hours: [
      { day: 'Mon-Fri', open: '8:00 AM', close: '8:00 PM' },
      { day: 'Sat-Sun', open: '9:00 AM', close: '9:00 PM' },
    ],
    amenities: ['WiFi', 'Seating'],
  },
  {
    name: 'Moobucks Tech Park',
    address: '789 Tech Ave, Silicon Valley',
    lat: 37.3875,
    lng: -122.0575,
    phone: '+1 (555) 246-8101',
    hours: defaultHours,
    amenities: ['WiFi', 'Seating', 'Drive-Thru', 'Outdoor Seating'],
  },
];

const NearestStorePage = () => {
  const location = useLocation();
  // Store info is passed via navigation state
  let store: Store | undefined = location.state?.store;

  // If no store in state, try to get lat/lng from query params and find nearest
  if (!store) {
    const searchParams = new URLSearchParams(location.search);
    const lat = parseFloat(searchParams.get('lat') || '');
    const lng = parseFloat(searchParams.get('lng') || '');
    if (!isNaN(lat) && !isNaN(lng)) {
      // Find nearest store
      const getDistance = (lat1: number, lng1: number, lat2: number, lng2: number) => {
        const toRad = (v: number) => (v * Math.PI) / 180;
        const R = 6371; // km
        const dLat = toRad(lat2 - lat1);
        const dLng = toRad(lng2 - lng1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
          Math.sin(dLng / 2) * Math.sin(dLng / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
      };
      let minDist = Infinity;
      let nearest: Store | undefined = undefined;
      for (const s of storeLocations) {
        const dist = getDistance(lat, lng, s.lat, s.lng);
        if (dist < minDist) {
          minDist = dist;
          nearest = { ...s, distance: dist };
        }
      }
      if (nearest) {
        store = nearest;
      }
    }
  }

  if (!store) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gradient-to-br from-moobucks-gold/10 via-white to-moobucks-green/5 text-center px-4">
        <div className="bg-white/90 rounded-2xl shadow-xl border border-moobucks-green px-8 py-10 max-w-md w-full">
          <h2 className="text-3xl font-bold mb-4 text-moobucks-green">No Store Data</h2>
          <p className="mb-6 text-gray-600">We couldn't find your nearest store. Please try again from the homepage.</p>
          <Link to="/" className="px-6 py-3 bg-moobucks-green text-white rounded font-semibold hover:bg-moobucks-dark transition-colors">Back to Home</Link>
        </div>
      </div>
    );
  }

  // Use sample data if not present
  const hours = store.hours || defaultHours;
  const amenities = store.amenities || defaultAmenities;
  const phone = store.phone || '+1 (555) 123-4567';

  return (
    <div className="min-h-[70vh] bg-gradient-to-br from-moobucks-gold/10 via-white to-moobucks-green/5 flex flex-col items-center justify-center px-2 py-8 md:py-16">
      <div className="w-full max-w-5xl bg-white/90 rounded-2xl shadow-2xl border border-moobucks-green flex flex-col md:flex-row overflow-hidden">
        {/* Left: Store Details */}
        <div className="md:w-1/2 w-full flex flex-col justify-between p-8 md:p-10 gap-6 border-b md:border-b-0 md:border-r border-moobucks-green/20">
          <div>
            <h2 className="text-4xl font-extrabold mb-2 text-moobucks-green tracking-tight">Your Nearest Moobucks</h2>
            <div className="mb-1 text-xl font-semibold text-moobucks-dark">{store.name}</div>
            <div className="mb-2 text-gray-700 text-base">{store.address}</div>
            <div className="mb-4 text-moobucks-gold font-medium text-lg">
              {store.distance?.toFixed(2) || 'N/A'} km away
            </div>
            <div className="mb-4">
              <div className="font-semibold text-moobucks-green mb-1">Phone</div>
              <a href={`tel:${phone.replace(/[^\d+]/g, '')}`} className="text-moobucks-green underline text-base font-medium mb-2 block">{phone}</a>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-moobucks-green mb-1">Hours</div>
              <div className="flex flex-col gap-1 text-gray-700 text-sm">
                {hours.map((h) => (
                  <div key={h.day} className="flex gap-2">
                    <span className="font-medium w-20 text-right">{h.day}:</span>
                    <span>{h.open} - {h.close}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <div className="font-semibold text-moobucks-green mb-1">Amenities</div>
              <div className="flex flex-wrap gap-2">
                {amenities.map((a) => (
                  <span key={a} className="bg-moobucks-green/10 text-moobucks-green border border-moobucks-green/30 px-3 py-1 rounded-full text-xs font-semibold">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="inline-block px-5 py-2 bg-moobucks-gold text-white rounded font-semibold hover:bg-moobucks-dark transition-colors text-center"
            >
              Call Store
            </a>
            <a
              href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(store.lat + ',' + store.lng)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-moobucks-green text-white rounded-lg font-bold text-lg hover:bg-moobucks-dark transition-colors shadow text-center"
            >
              Get Directions
            </a>
            <Link to="/" className="block text-moobucks-green underline text-base font-medium text-center">Back to Home</Link>
          </div>
        </div>
        {/* Right: Map */}
        <div className="md:w-1/2 w-full flex items-center justify-center bg-moobucks-green/5 p-4 md:p-8">
          <iframe
            title="Store Location"
            width="100%"
            height="340"
            className="rounded-lg shadow w-full max-w-md border border-moobucks-green/30 min-h-[220px]"
            style={{ minHeight: 220 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps?q=${store.lat},${store.lng}&z=15&output=embed`}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default NearestStorePage; 