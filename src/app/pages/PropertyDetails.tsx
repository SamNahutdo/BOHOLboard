import { useParams, useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { MapPin, Star, Bed, Bath, Wifi, Car, Tv, Wind, ArrowLeft } from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Mock property data
  const property = {
    id: 1,
    name: 'Beach House Villa',
    location: 'Panglao, Bohol',
    price: 3500,
    image: 'beach house villa',
    rating: 4.8,
    reviews: 24,
    bedrooms: 3,
    bathrooms: 2,
    description: 'A beautiful beachfront villa with stunning ocean views. Perfect for families and groups looking for a relaxing getaway. The property features modern amenities, spacious rooms, and direct beach access.',
    amenities: [
      { icon: Wifi, name: 'Free WiFi' },
      { icon: Car, name: 'Parking' },
      { icon: Tv, name: 'Smart TV' },
      { icon: Wind, name: 'Air Conditioning' },
    ],
    images: [
      'beach house villa exterior',
      'beach house living room',
      'beach house bedroom',
      'beach house kitchen',
    ]
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-[#636e72] hover:text-[#2d3436] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Properties
        </button>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="relative h-[400px] rounded-[20px] overflow-hidden">
            <ImageWithFallback
              src={`https://source.unsplash.com/1200x800/?${encodeURIComponent(property.images[0])}`}
              alt={property.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {property.images.slice(1).map((img, index) => (
              <div key={index} className="relative h-[192px] rounded-[15px] overflow-hidden">
                <ImageWithFallback
                  src={`https://source.unsplash.com/600x400/?${encodeURIComponent(img)}`}
                  alt={`${property.name} ${index + 2}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Header */}
            <div>
              <h1 className="text-[32px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-2">
                {property.name}
              </h1>
              <div className="flex items-center gap-4 text-[#636e72] mb-4">
                <div className="flex items-center gap-1">
                  <MapPin className="w-5 h-5" />
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif]">
                    {property.location}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-[#ffc107] fill-[#ffc107]" />
                  <span className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                    {property.rating}
                  </span>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif]">
                    ({property.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-[15px] p-6 shadow-sm">
              <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
                Property Features
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#219653]/10 rounded-lg flex items-center justify-center">
                    <Bed className="w-5 h-5 text-[#219653]" />
                  </div>
                  <div>
                    <p className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                      {property.bedrooms}
                    </p>
                    <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                      Bedrooms
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#219653]/10 rounded-lg flex items-center justify-center">
                    <Bath className="w-5 h-5 text-[#219653]" />
                  </div>
                  <div>
                    <p className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                      {property.bathrooms}
                    </p>
                    <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                      Bathrooms
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-[15px] p-6 shadow-sm">
              <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
                About this property
              </h3>
              <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72] leading-relaxed">
                {property.description}
              </p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-[15px] p-6 shadow-sm">
              <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
                Amenities
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#219653]" />
                      <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#2d3436]">
                        {amenity.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[15px] p-6 shadow-lg sticky top-24">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-[28px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                    ₱{property.price}
                  </span>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    per night
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-[#ffc107] fill-[#ffc107]" />
                  <span className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                    {property.rating}
                  </span>
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    · {property.reviews} reviews
                  </span>
                </div>
              </div>

              <button
                onClick={() => navigate(`/booking/${property.id}`)}
                className="w-full bg-[#219653] hover:bg-[#1a7741] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors mb-3"
              >
                Book Now
              </button>

              <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72] text-center">
                You won't be charged yet
              </p>

              <div className="mt-6 pt-6 border-t border-[#dfe6e9] space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Cleaning fee
                  </span>
                  <span className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    ₱500
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Service fee
                  </span>
                  <span className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    ₱350
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
