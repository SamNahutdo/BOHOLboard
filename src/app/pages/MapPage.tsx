import { useState } from 'react';
import { MapPinned, Radar, Navigation2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const boardingHouses = [
  {
    id: 1,
    name: 'Tagbilaran City Boarding House',
    location: 'Cogon District, Tagbilaran City',
    distanceKm: 0.4,
    image: 'boarding house tagbilaran bohol city',
    isActive: true,
  },
  {
    id: 2,
    name: 'University Lane Boarding House',
    location: 'Near BISU, Tagbilaran City',
    distanceKm: 0.9,
    image: 'student boarding house bisu tagbilaran bohol',
    isActive: true,
  },
  {
    id: 3,
    name: 'Downtown Shared Rooms',
    location: 'Downtown, Tagbilaran City',
    distanceKm: 1.5,
    image: 'boarding house downtown tagbilaran',
    isActive: false,
  },
];

export default function MapPage() {
  const [nearestId, setNearestId] = useState<number | null>(null);
  const [scanning, setScanning] = useState(false);

  const handleScan = () => {
    setScanning(true);

    // Simulate a short scan, then select the closest active boarding house.
    setTimeout(() => {
      const active = boardingHouses.filter((b) => b.isActive);
      const nearest = active.reduce((best, current) =>
        current.distanceKm < best.distanceKm ? current : best,
      );
      setNearestId(nearest.id);
      setScanning(false);
    }, 900);
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-[32px] md:text-[40px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-2">
              Map & Nearby Boarding Houses
            </h1>
            <p className="text-[15px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
              Scan to find the nearest active boarding house around Tagbilaran City, Bohol.
            </p>
          </div>

          <button
            onClick={handleScan}
            disabled={scanning}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-[12px] bg-[#219653] text-white font-['Poppins:SemiBold',sans-serif] text-[14px] hover:bg-[#1a7741] disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
          >
            <Radar className="w-5 h-5" />
            {scanning ? 'Scanning…' : 'Scan nearest bhouse'}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1.5fr] gap-6">
          {/* Map placeholder */}
          <div className="bg-white rounded-[20px] shadow-sm overflow-hidden h-[320px] md:h-[420px] relative">
            <ImageWithFallback
              src="https://source.unsplash.com/1200x800/?tagbilaran,bohol,city,streets"
              alt="Map preview of Tagbilaran City, Bohol"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/10 to-transparent" />

            <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full">
              <MapPinned className="w-4 h-4 text-[#219653]" />
              <span className="text-[13px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                Tagbilaran City • Bohol
              </span>
            </div>

            {nearestId && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm rounded-[14px] px-4 py-3 shadow-md flex items-center gap-3">
                <Navigation2 className="w-5 h-5 text-[#219653]" />
                <div>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Nearest active bhouse
                  </p>
                  <p className="text-[15px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                    {
                      boardingHouses.find((b) => b.id === nearestId)
                        ?.name
                    }
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* List of boarding houses */}
          <div className="space-y-4">
            {boardingHouses.map((bhouse) => (
              <div
                key={bhouse.id}
                className={`bg-white rounded-[16px] shadow-sm overflow-hidden flex gap-4 p-3 border ${
                  bhouse.id === nearestId
                    ? 'border-[#219653]'
                    : 'border-[#dfe6e9]'
                }`}
              >
                <div className="w-28 h-24 rounded-[12px] overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/400x300/?${encodeURIComponent(
                      bhouse.image,
                    )}`}
                    alt={bhouse.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
                    {bhouse.name}
                  </h3>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72] mb-1">
                    {bhouse.location}
                  </p>

                  <div className="flex items-center justify-between text-[13px]">
                    <span className="font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                      ~{bhouse.distanceKm.toFixed(1)} km away
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full font-['Poppins:Medium',sans-serif] ${
                        bhouse.isActive
                          ? 'bg-[#219653]/10 text-[#219653]'
                          : 'bg-[#dfe6e9] text-[#636e72]'
                      }`}
                    >
                      {bhouse.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

