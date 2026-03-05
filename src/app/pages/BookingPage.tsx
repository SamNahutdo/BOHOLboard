import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowLeft } from 'lucide-react';

export default function BookingPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  // Mock property data
  const property = {
    id: 1,
    name: 'Beach House Villa',
    location: 'Panglao, Bohol',
    price: 3500,
    image: 'beach house villa',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/booking-success', { state: { property, formData } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const start = new Date(formData.checkIn);
      const end = new Date(formData.checkOut);
      const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const subtotal = nights * property.price;
  const cleaningFee = 500;
  const serviceFee = 350;
  const totalPrice = subtotal + cleaningFee + serviceFee;

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-[#636e72] hover:text-[#2d3436] font-['Poppins:Medium',sans-serif] text-[14px] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-[32px] font-['Poppins:Bold',sans-serif] text-[#2d3436] mb-8">
          Complete Your Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Property Summary */}
            <div className="bg-white rounded-[15px] overflow-hidden shadow-sm">
              <div className="grid grid-cols-[120px_1fr] gap-4 p-4">
                <div className="relative h-[100px] rounded-[10px] overflow-hidden">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/400x300/?${encodeURIComponent(property.image)}`}
                    alt={property.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
                    {property.name}
                  </h3>
                  <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    {property.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <form onSubmit={handleSubmit} className="bg-white rounded-[15px] p-6 shadow-sm space-y-5">
              <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                Booking Details
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    min={formData.checkIn || new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Number of Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>

              <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] pt-4">
                Guest Information
              </h2>

              <div className="space-y-2">
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+63 912 345 6789"
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Special Requests (Optional)
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any special requirements or requests..."
                  className="w-full px-4 py-3 border border-[#dfe6e9] rounded-[10px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-2 focus:ring-[#219653]/20 resize-none"
                />
              </div>
            </form>
          </div>

          {/* Right Column - Price Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[15px] p-6 shadow-lg sticky top-24">
              <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
                Price Summary
              </h2>

              {nights > 0 ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                      ₱{property.price} × {nights} {nights === 1 ? 'night' : 'nights'}
                    </span>
                    <span className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                      ₱{subtotal.toLocaleString()}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                      Cleaning fee
                    </span>
                    <span className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                      ₱{cleaningFee}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                      Service fee
                    </span>
                    <span className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                      ₱{serviceFee}
                    </span>
                  </div>
                  
                  <div className="h-px bg-[#dfe6e9]" />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                      Total
                    </span>
                    <span className="text-[20px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                      ₱{totalPrice.toLocaleString()}
                    </span>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#219653] hover:bg-[#1a7741] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors mt-6"
                  >
                    Confirm Booking
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Select check-in and check-out dates to see the total price
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
