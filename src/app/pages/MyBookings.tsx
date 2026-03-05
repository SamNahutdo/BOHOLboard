import { Calendar, MapPin, Users, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

interface MyBookingsProps {
  userRole: 'owner' | 'boarder' | null;
}

export default function MyBookings({ userRole }: MyBookingsProps) {
  const bookings = [
    {
      id: 1,
      property: 'Beach House Villa',
      location: 'Panglao, Bohol',
      image: 'beach house villa',
      checkIn: '2026-03-15',
      checkOut: '2026-03-18',
      guests: 4,
      status: 'confirmed',
      price: 10500,
    },
    {
      id: 2,
      property: 'Mountain View Resort',
      location: 'Chocolate Hills, Bohol',
      image: 'mountain resort',
      checkIn: '2026-04-20',
      checkOut: '2026-04-23',
      guests: 2,
      status: 'pending',
      price: 8400,
    },
    {
      id: 3,
      property: 'City Center Apartment',
      location: 'Tagbilaran City, Bohol',
      image: 'modern apartment',
      checkIn: '2026-02-10',
      checkOut: '2026-02-12',
      guests: 2,
      status: 'completed',
      price: 3000,
    },
  ];

  const ownerBookings = [
    {
      id: 1,
      property: 'Beach House Villa',
      guest: 'Juan Dela Cruz',
      checkIn: '2026-03-15',
      checkOut: '2026-03-18',
      guests: 4,
      status: 'confirmed',
      price: 10500,
    },
    {
      id: 2,
      property: 'Mountain View Resort',
      guest: 'Maria Santos',
      checkIn: '2026-04-20',
      checkOut: '2026-04-23',
      guests: 2,
      status: 'pending',
      price: 8400,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-[#219653]/10 text-[#219653]';
      case 'pending':
        return 'bg-[#ffc107]/10 text-[#f39c12]';
      case 'completed':
        return 'bg-[#636e72]/10 text-[#636e72]';
      default:
        return 'bg-[#dfe6e9] text-[#636e72]';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-[32px] md:text-[40px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-2">
            {userRole === 'owner' ? 'Property Bookings' : 'My Bookings'}
          </h1>
          <p className="text-[16px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
            {userRole === 'owner' 
              ? 'Manage and track all bookings for your properties' 
              : 'View and manage your reservations'}
          </p>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {userRole === 'owner'
            ? ownerBookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-[15px] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0 md:gap-6">
                    <div className="p-6 flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
                            {booking.property}
                          </h3>
                          <p className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#636e72]">
                            Guest: {booking.guest}
                          </p>
                        </div>

                        <div
                          className={`px-4 py-2 rounded-full font-['Poppins:SemiBold',sans-serif] text-[13px] capitalize ${getStatusColor(booking.status)} self-start`}
                        >
                          {booking.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#636e72]" />
                          <div>
                            <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                              Check-in
                            </p>
                            <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                              {formatDate(booking.checkIn)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#636e72]" />
                          <div>
                            <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                              Check-out
                            </p>
                            <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                              {formatDate(booking.checkOut)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#636e72]" />
                          <div>
                            <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                              Guests
                            </p>
                            <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                              {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#dfe6e9]">
                        <div>
                          <p className="text-[20px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                            ₱{booking.price.toLocaleString()}
                          </p>
                          <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                            Total amount
                          </p>
                        </div>

                        <div className="flex gap-2">
                          {booking.status === 'confirmed' && (
                            <button className="px-5 py-2 bg-[#219653] hover:bg-[#1a7741] text-white rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors">
                              View Details
                            </button>
                          )}
                          {booking.status === 'pending' && (
                            <>
                              <button className="px-5 py-2 bg-[#219653] hover:bg-[#1a7741] text-white rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors">
                                Accept
                              </button>
                              <button className="px-5 py-2 bg-white hover:bg-[#f8f9fa] text-[#636e72] border border-[#dfe6e9] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors">
                                Decline
                              </button>
                            </>
                          )}
                          {booking.status === 'completed' && (
                            <button className="px-5 py-2 bg-white hover:bg-[#f8f9fa] text-[#636e72] border border-[#dfe6e9] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors">
                              Write Review
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="bg-white rounded-[15px] shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-0 md:gap-6">
                    <div className="relative h-[200px] md:h-auto">
                      <ImageWithFallback
                        src={`https://source.unsplash.com/600x400/?${encodeURIComponent(booking.image)}`}
                        alt={booking.property}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="p-6 flex-1">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                        <div>
                          <h3 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
                            {booking.property}
                          </h3>
                          <div className="flex items-center gap-1 text-[#636e72]">
                            <MapPin className="w-4 h-4" />
                            <span className="text-[14px] font-['Poppins:Regular',sans-serif]">
                              {booking.location}
                            </span>
                          </div>
                        </div>

                        <div
                          className={`px-4 py-2 rounded-full font-['Poppins:SemiBold',sans-serif] text-[13px] capitalize ${getStatusColor(booking.status)} self-start`}
                        >
                          {booking.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#636e72]" />
                          <div>
                            <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                              Check-in
                            </p>
                            <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                              {formatDate(booking.checkIn)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-[#636e72]" />
                          <div>
                            <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                              Check-out
                            </p>
                            <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                              {formatDate(booking.checkOut)}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-[#636e72]" />
                          <div>
                            <p className="text-[12px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                              Guests
                            </p>
                            <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                              {booking.guests} {booking.guests === 1 ? 'Guest' : 'Guests'}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-[#dfe6e9]">
                        <div>
                          <p className="text-[20px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                            ₱{booking.price.toLocaleString()}
                          </p>
                          <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                            Total amount
                          </p>
                        </div>

                        <div className="flex gap-2">
                          {booking.status === 'confirmed' && (
                            <button className="px-5 py-2 bg-[#219653] hover:bg-[#1a7741] text-white rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors">
                              View Details
                            </button>
                          )}
                          {booking.status === 'completed' && (
                            <button className="px-5 py-2 bg-white hover:bg-[#f8f9fa] text-[#636e72] border border-[#dfe6e9] rounded-[8px] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors">
                              Write Review
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {/* Empty State */}
        {(userRole === 'owner' ? ownerBookings : bookings).length === 0 && (
          <div className="bg-white rounded-[15px] p-12 text-center shadow-sm">
            <Clock className="w-16 h-16 text-[#636e72] mx-auto mb-4 opacity-50" />
            <h3 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-2">
              No bookings yet
            </h3>
            <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
              {userRole === 'owner' 
                ? 'Bookings for your properties will appear here' 
                : 'Start exploring and book your first stay'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
