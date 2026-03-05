import PropertyCard from '../components/PropertyCard';
import { Search, Filter, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

export default function PropertiesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    bedrooms: '',
    propertyType: 'all',
  });

  const properties = [
    {
      id: 1,
      name: 'Tagbilaran City Boarding House',
      location: 'Cogon District, Tagbilaran City, Bohol',
      price: 3500,
      image: 'boarding house tagbilaran bohol city',
      rating: 4.8,
      bedrooms: 3,
      bathrooms: 2,
      type: 'house',
    },
    {
      id: 2,
      name: 'University Lane Boarding House',
      location: 'Near BISU, Tagbilaran City, Bohol',
      price: 2800,
      image: 'student boarding house tagbilaran bohol',
      rating: 4.9,
      bedrooms: 2,
      bathrooms: 1,
      type: 'house',
    },
    {
      id: 3,
      name: 'City Center Shared Rooms',
      location: 'Downtown, Tagbilaran City, Bohol',
      price: 1500,
      image: 'boarding house downtown tagbilaran',
      rating: 4.6,
      bedrooms: 1,
      bathrooms: 1,
      type: 'apartment',
    },
    {
      id: 4,
      name: 'Seaside Cottage',
      location: 'Anda, Bohol',
      price: 2200,
      image: 'seaside cottage',
      rating: 4.7,
      bedrooms: 2,
      bathrooms: 1,
      type: 'house',
    },
    {
      id: 5,
      name: 'Luxury Condo',
      location: 'Tagbilaran City, Bohol',
      price: 4500,
      image: 'luxury condo',
      rating: 4.9,
      bedrooms: 3,
      bathrooms: 3,
      type: 'apartment',
    },
    {
      id: 6,
      name: 'Farm House',
      location: 'Carmen, Bohol',
      price: 1800,
      image: 'farm house',
      rating: 4.5,
      bedrooms: 2,
      bathrooms: 1,
      type: 'house',
    },
  ];

  const handleSelectProperty = (property: any) => {
    window.location.href = `/property/${property.id}`;
  };

  const filteredProperties = properties.filter((property) => {
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery =
      !q ||
      property.name.toLowerCase().includes(q) ||
      property.location.toLowerCase().includes(q);

    const matchesMinPrice =
      !filters.minPrice || property.price >= Number(filters.minPrice);

    const matchesMaxPrice =
      !filters.maxPrice || property.price <= Number(filters.maxPrice);

    const matchesBedrooms =
      !filters.bedrooms || property.bedrooms >= Number(filters.bedrooms);

    const matchesType =
      filters.propertyType === 'all' || property.type === filters.propertyType;

    return (
      matchesQuery &&
      matchesMinPrice &&
      matchesMaxPrice &&
      matchesBedrooms &&
      matchesType
    );
  });

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[32px] md:text-[40px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-2">
            All Properties
          </h1>
          <p className="text-[16px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
            {filteredProperties.length} boarding houses available in Bohol
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-[15px] p-4 shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by location, property name..."
                className="w-full pl-12 pr-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
              />
            </div>
            
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 border border-[#dfe6e9] rounded-[10px] hover:bg-[#f8f9fa] transition-colors font-['Poppins:Medium',sans-serif] text-[14px] text-[#2d3436]"
            >
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-[#dfe6e9]">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="text-[13px] font-['Poppins:Medium',sans-serif] text-[#2d3436] mb-2 block">
                    Min Price
                  </label>
                  <input
                    type="number"
                    value={filters.minPrice}
                    onChange={(e) => setFilters({...filters, minPrice: e.target.value})}
                    placeholder="₱0"
                    className="w-full px-3 py-2 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653]"
                  />
                </div>
                
                <div>
                  <label className="text-[13px] font-['Poppins:Medium',sans-serif] text-[#2d3436] mb-2 block">
                    Max Price
                  </label>
                  <input
                    type="number"
                    value={filters.maxPrice}
                    onChange={(e) => setFilters({...filters, maxPrice: e.target.value})}
                    placeholder="₱10000"
                    className="w-full px-3 py-2 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653]"
                  />
                </div>
                
                <div>
                  <label className="text-[13px] font-['Poppins:Medium',sans-serif] text-[#2d3436] mb-2 block">
                    Bedrooms
                  </label>
                  <select
                    value={filters.bedrooms}
                    onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
                    className="w-full px-3 py-2 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653]"
                  >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                  </select>
                </div>
                
                <div>
                  <label className="text-[13px] font-['Poppins:Medium',sans-serif] text-[#2d3436] mb-2 block">
                    Property Type
                  </label>
                  <select
                    value={filters.propertyType}
                    onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                    className="w-full px-3 py-2 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653]"
                  >
                    <option value="all">All Types</option>
                    <option value="house">House</option>
                    <option value="apartment">Apartment</option>
                    <option value="resort">Resort</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onSelect={handleSelectProperty}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
