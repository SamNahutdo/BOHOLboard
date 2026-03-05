import { TrendingUp, DollarSign, Calendar, Eye, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function OwnerDashboard() {
  const stats = [
    {
      icon: DollarSign,
      label: 'Total Earnings',
      value: '₱125,000',
      change: '+12.5%',
      positive: true,
    },
    {
      icon: Calendar,
      label: 'Active Bookings',
      value: '12',
      change: '+3',
      positive: true,
    },
    {
      icon: Eye,
      label: 'Property Views',
      value: '2,458',
      change: '+18.2%',
      positive: true,
    },
    {
      icon: TrendingUp,
      label: 'Occupancy Rate',
      value: '78%',
      change: '+5.3%',
      positive: true,
    },
  ];

  const properties = [
    {
      id: 1,
      name: 'Beach House Villa',
      location: 'Panglao, Bohol',
      image: 'beach house villa',
      status: 'Active',
      bookings: 8,
      earnings: '₱45,000',
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Mountain View Resort',
      location: 'Chocolate Hills, Bohol',
      image: 'mountain resort',
      status: 'Active',
      bookings: 5,
      earnings: '₱38,000',
      rating: 4.9,
    },
    {
      id: 3,
      name: 'City Center Apartment',
      location: 'Tagbilaran City, Bohol',
      image: 'modern apartment',
      status: 'Active',
      bookings: 12,
      earnings: '₱42,000',
      rating: 4.6,
    },
  ];

  const recentBookings = [
    {
      id: 1,
      guest: 'Juan Dela Cruz',
      property: 'Beach House Villa',
      checkIn: '2026-03-15',
      checkOut: '2026-03-18',
      amount: '₱10,500',
      status: 'Confirmed',
    },
    {
      id: 2,
      guest: 'Maria Santos',
      property: 'Mountain View Resort',
      checkIn: '2026-04-20',
      checkOut: '2026-04-23',
      amount: '₱8,400',
      status: 'Pending',
    },
    {
      id: 3,
      guest: 'Pedro Garcia',
      property: 'City Center Apartment',
      checkIn: '2026-03-25',
      checkOut: '2026-03-27',
      amount: '₱3,000',
      status: 'Confirmed',
    },
  ];

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[32px] md:text-[40px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-2">
              Dashboard
            </h1>
            <p className="text-[16px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
              Welcome back! Here's an overview of your properties
            </p>
          </div>

          <Link
            to="/add-property"
            className="inline-flex items-center justify-center gap-2 bg-[#219653] hover:bg-[#1a7741] text-white px-6 py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors"
          >
            <Plus className="w-5 h-5" />
            Add Property
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-[15px] p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#219653]/10 rounded-full flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#219653]" />
                  </div>
                  <span className={`text-[13px] font-['Poppins:SemiBold',sans-serif] ${stat.positive ? 'text-[#219653]' : 'text-[#d63031]'}`}>
                    {stat.change}
                  </span>
                </div>
                <p className="text-[28px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-1">
                  {stat.value}
                </p>
                <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* My Properties */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">
                My Properties
              </h2>
              <Link
                to="/properties"
                className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#219653] hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {properties.map((property) => (
                <div
                  key={property.id}
                  className="bg-white rounded-[15px] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-[120px_1fr] gap-4 p-4">
                    <div className="relative h-[100px] rounded-[10px] overflow-hidden">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/400x300/?${encodeURIComponent(property.image)}`}
                        alt={property.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between mb-1">
                          <h3 className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                            {property.name}
                          </h3>
                          <span className="px-2 py-1 bg-[#219653]/10 text-[#219653] rounded-full text-[11px] font-['Poppins:SemiBold',sans-serif]">
                            {property.status}
                          </span>
                        </div>
                        <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                          {property.location}
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-2">
                        <div className="flex gap-4 text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                          <span>{property.bookings} bookings</span>
                          <span>⭐ {property.rating}</span>
                        </div>
                        <p className="text-[16px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                          {property.earnings}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-[24px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">
                Recent Bookings
              </h2>
            </div>

            <div className="space-y-3">
              {recentBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-[15px] p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                        {booking.guest}
                      </p>
                      <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                        {booking.property}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-[11px] font-['Poppins:SemiBold',sans-serif] ${
                      booking.status === 'Confirmed' 
                        ? 'bg-[#219653]/10 text-[#219653]' 
                        : 'bg-[#ffc107]/10 text-[#f39c12]'
                    }`}>
                      {booking.status}
                    </span>
                  </div>

                  <div className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72] mb-2">
                    {new Date(booking.checkIn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(booking.checkOut).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-[#dfe6e9]">
                    <span className="text-[14px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                      {booking.amount}
                    </span>
                    {booking.status === 'Pending' && (
                      <button className="text-[12px] font-['Poppins:SemiBold',sans-serif] text-[#219653] hover:underline">
                        Review
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/my-bookings"
              className="block w-full text-center bg-white hover:bg-[#f8f9fa] text-[#219653] border-2 border-[#dfe6e9] py-2 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[14px] transition-colors"
            >
              View All Bookings
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
