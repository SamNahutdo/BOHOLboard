import { useNavigate, useLocation } from 'react-router-dom';
import SuccessRent from '../../imports/SuccessRent-1-63';
import { CheckCircle, Calendar, MapPin, Users, Mail, Phone } from 'lucide-react';

export default function BookingSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { property, formData } = location.state || {};

  // If no booking data, redirect to home
  if (!property || !formData) {
    setTimeout(() => navigate('/home'), 100);
    return null;
  }

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Success Message from Figma */}
        <div className="mb-8 animate-fadeIn">
          <SuccessRent />
        </div>

        {/* Booking Confirmation Details */}
        <div className="bg-white rounded-[20px] shadow-lg p-8 mb-6">
          <div className="flex items-center gap-3 mb-6 pb-6 border-b border-[#dfe6e9]">
            <div className="w-12 h-12 bg-[#219653]/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-7 h-7 text-[#219653]" />
            </div>
            <div>
              <h2 className="text-[24px] font-['Poppins:Bold',sans-serif] text-[#2d3436]">
                Booking Confirmed
              </h2>
              <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                Reference: #{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </p>
            </div>
          </div>

          {/* Property Details */}
          <div className="mb-6 pb-6 border-b border-[#dfe6e9]">
            <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
              Property Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#636e72] mt-0.5" />
                <div>
                  <p className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                    {property.name}
                  </p>
                  <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    {property.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="mb-6 pb-6 border-b border-[#dfe6e9]">
            <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
              Stay Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-[#636e72] mt-0.5" />
                <div>
                  <p className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    Check-in: {formatDate(formData.checkIn)}
                  </p>
                  <p className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    Check-out: {formatDate(formData.checkOut)}
                  </p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72] mt-1">
                    {nights} {nights === 1 ? 'night' : 'nights'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#636e72]" />
                <p className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  {formData.guests} {formData.guests === '1' ? 'Guest' : 'Guests'}
                </p>
              </div>
            </div>
          </div>

          {/* Guest Information */}
          <div className="mb-6 pb-6 border-b border-[#dfe6e9]">
            <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
              Guest Information
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-[14px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                  {formData.fullName}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#636e72]" />
                <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  {formData.email}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#636e72]" />
                <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  {formData.phone}
                </p>
              </div>

              {formData.specialRequests && (
                <div className="mt-3 p-3 bg-[#f8f9fa] rounded-[10px]">
                  <p className="text-[13px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
                    Special Requests:
                  </p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    {formData.specialRequests}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Price Summary */}
          <div>
            <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
              Payment Summary
            </h3>
            <div className="space-y-3">
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
              
              <div className="h-px bg-[#dfe6e9] my-3" />
              
              <div className="flex justify-between items-center">
                <span className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                  Total Paid
                </span>
                <span className="text-[22px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                  ₱{totalPrice.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => navigate('/my-bookings')}
            className="flex-1 bg-[#219653] hover:bg-[#1a7741] text-white py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm transition-colors"
          >
            View My Bookings
          </button>
          
          <button
            onClick={() => navigate('/home')}
            className="flex-1 bg-white hover:bg-[#f8f9fa] text-[#2d3436] border-2 border-[#dfe6e9] py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-colors"
          >
            Back to Home
          </button>
        </div>

        {/* Confirmation Email Notice */}
        <div className="mt-6 p-4 bg-[#c9eed9] rounded-[10px]">
          <p className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#219653] text-center">
            A confirmation email has been sent to {formData.email}
          </p>
        </div>
      </div>
    </div>
  );
}
