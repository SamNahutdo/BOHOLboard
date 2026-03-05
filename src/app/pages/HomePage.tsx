import { Link } from 'react-router-dom';
import { Search, TrendingUp, MapPin, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';

interface HomePageProps {
  userRole: 'owner' | 'boarder' | null;
}

export default function HomePage({ userRole }: HomePageProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const featuredProperties = [
    {
      id: 1,
      name: 'Tagbilaran City Boarding House',
      location: 'Cogon District, Tagbilaran City, Bohol',
      price: 3500,
      image: 'boarding house tagbilaran bohol city',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'University Lane Boarding House',
      location: 'Near Bohol Island State University, Tagbilaran',
      price: 2800,
      image: 'student boarding house tagbilaran bohol',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'City Center Shared Rooms',
      location: 'Downtown, Tagbilaran City, Bohol',
      price: 1500,
      image: 'boarding house downtown tagbilaran bohol',
      rating: 4.6,
    },
  ];

  const popularLocations = [
    { name: 'Tagbilaran City', image: 'tagbilaran boarding house bohol' },
    { name: 'Cogon District', image: 'boarding house cogon tagbilaran bohol' },
    { name: 'Near BISU', image: 'student boarding house bisu tagbilaran bohol' },
    { name: 'Downtown Area', image: 'boarding house downtown tagbilaran' },
  ];

  return (
    <div className="min-h-screen pb-8">
      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        <ImageWithFallback
          src="https://source.unsplash.com/1920x1080/?bohol,landscape"
          alt="Bohol"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#2d3436]/60 to-[#2d3436]/40" />
        
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="max-w-3xl w-full">
            <h1 className="text-[36px] md:text-[48px] font-['Poppins:Bold',sans-serif] text-white text-center mb-4">
              {userRole === 'owner' ? 'Manage Your Properties' : 'Find Your Perfect Stay'}
            </h1>
            <p className="text-[16px] md:text-[18px] font-['Poppins:Regular',sans-serif] text-white/90 text-center mb-8">
              {userRole === 'owner' ? 'Welcome back! Track and manage all your listings' : 'Discover amazing places to stay in Bohol'}
            </p>

            {userRole !== 'owner' && (
              <div className="bg-white rounded-[15px] p-2 shadow-xl">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#636e72]" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search location, property..."
                      className="w-full pl-12 pr-4 py-3 rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none"
                    />
                  </div>
                  <Link
                    to="/search"
                    className="bg-[#219653] hover:bg-[#1a7741] text-white px-6 py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[14px] whitespace-nowrap transition-colors"
                  >
                    Search
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-12">
        {/* Stats for Owners */}
        {userRole === 'owner' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-[15px] p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#219653]/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#219653]" />
                </div>
                <div>
                  <p className="text-[24px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">₱45,000</p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">Total Earnings</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[15px] p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#219653]/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#219653]" />
                </div>
                <div>
                  <p className="text-[24px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">3</p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">Active Properties</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-[15px] p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#219653]/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-[#219653]" />
                </div>
                <div>
                  <p className="text-[24px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">12</p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">Active Bookings</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Featured Properties */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[24px] md:text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">
              {userRole === 'owner' ? 'Your Properties' : 'Featured Properties'}
            </h2>
            {userRole === 'owner' && (
              <Link
                to="/properties"
                className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#219653] hover:underline"
              >
                View All
              </Link>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProperties.map((property) => (
              <Link
                key={property.id}
                to={`/property/${property.id}`}
                className="bg-white rounded-[15px] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative h-[200px] overflow-hidden">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x600/?${encodeURIComponent(property.image)}`}
                    alt={property.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-[#ffc107] fill-[#ffc107]" />
                    <span className="text-[13px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                      {property.rating}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
                    {property.name}
                  </h3>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72] mb-3">
                    {property.location}
                  </p>
                  <p className="text-[18px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                    ₱{property.price}
                    <span className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]"> /night</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Popular Locations */}
        {userRole !== 'owner' && (
          <div className="mb-12">
            <h2 className="text-[24px] md:text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-6">
              Popular Locations
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {popularLocations.map((location) => (
                <div
                  key={location.name}
                  className="relative h-[150px] rounded-[15px] overflow-hidden cursor-pointer group"
                >
                  <ImageWithFallback
                    src={`https://source.unsplash.com/600x400/?${encodeURIComponent(location.image)}`}
                    alt={location.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d3436]/70 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-white">
                      {location.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
