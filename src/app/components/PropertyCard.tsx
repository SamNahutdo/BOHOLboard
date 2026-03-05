import { ImageWithFallback } from './figma/ImageWithFallback';

interface PropertyCardProps {
  property: {
    id: number;
    name: string;
    location: string;
    price: number;
    image: string;
    rating: number;
    bedrooms: number;
    bathrooms: number;
  };
  onSelect: (property: any) => void;
}

export default function PropertyCard({ property, onSelect }: PropertyCardProps) {
  return (
    <div
      className="bg-white rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => onSelect(property)}
    >
      <div className="relative h-[200px] overflow-hidden">
        <ImageWithFallback
          src={`https://source.unsplash.com/800x600/?${encodeURIComponent(property.image)},philippines`}
          alt={property.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
          <svg className="w-4 h-4 text-[#ffc107]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
          <span className="text-[13px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
            {property.rating}
          </span>
        </div>
      </div>

      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
            {property.name}
          </h3>
          <div className="flex items-center gap-1 text-[#636e72]">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span className="text-[13px] font-['Poppins:Regular',sans-serif]">
              {property.location}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[#636e72]">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4z" />
            </svg>
            <span className="text-[13px] font-['Poppins:Regular',sans-serif]">
              {property.bedrooms} Beds
            </span>
          </div>
          
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 2v2H7C5.9 4 5 4.9 5 6v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-2V2h-2v2H9V2H7zm8 18H7V6h10v14z" />
            </svg>
            <span className="text-[13px] font-['Poppins:Regular',sans-serif]">
              {property.bathrooms} Baths
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-[#dfe6e9]">
          <div>
            <span className="text-[20px] font-['Poppins:Bold',sans-serif] text-[#219653]">
              ₱{property.price}
            </span>
            <span className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
              {' '}/night
            </span>
          </div>
          
          <button className="bg-[#219653] text-white rounded-[8px] px-4 py-2 font-['Poppins:Medium',sans-serif] text-[14px] hover:bg-[#1a7741] transition-colors">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
