import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface BookingFormProps {
  property: {
    id: number;
    name: string;
    location: string;
    price: number;
    image: string;
  };
  onSubmit: () => void;
}

export default function BookingForm({ property, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '1',
    fullName: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Calculate number of nights
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
  const totalPrice = nights * property.price;

  return (
    <div className="space-y-4">
      {/* Property Summary */}
      <div className="bg-white rounded-[15px] overflow-hidden shadow-sm">
        <div className="relative h-[150px]">
          <ImageWithFallback
            src={`https://source.unsplash.com/800x600/?${encodeURIComponent(property.image)},philippines`}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-1">
            {property.name}
          </h3>
          <p className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
            {property.location}
          </p>
        </div>
      </div>

      {/* Booking Form */}
      <form onSubmit={handleSubmit} className="bg-white rounded-[15px] p-5 shadow-sm space-y-4">
        <h3 className="text-[18px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
          Booking Information
        </h3>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
              Check-in
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2.5 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-1 focus:ring-[#219653]"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
              Check-out
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
              onChange={handleChange}
              required
              min={formData.checkIn || new Date().toISOString().split('T')[0]}
              className="w-full px-3 py-2.5 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-1 focus:ring-[#219653]"
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
            className="w-full px-3 py-2.5 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-1 focus:ring-[#219653]"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
              <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
            ))}
          </select>
        </div>

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
            className="w-full px-3 py-2.5 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-1 focus:ring-[#219653]"
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
            className="w-full px-3 py-2.5 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-1 focus:ring-[#219653]"
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
            className="w-full px-3 py-2.5 border border-[#dfe6e9] rounded-[8px] text-[14px] font-['Poppins:Regular',sans-serif] focus:outline-none focus:border-[#219653] focus:ring-1 focus:ring-[#219653]"
          />
        </div>

        {/* Price Summary */}
        {nights > 0 && (
          <div className="bg-[#f8f9fa] rounded-[10px] p-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-[14px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                ₱{property.price} × {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
              <span className="text-[14px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                ₱{totalPrice}
              </span>
            </div>
            <div className="flex justify-between items-center pt-2 border-t border-[#dfe6e9]">
              <span className="text-[16px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                Total
              </span>
              <span className="text-[18px] font-['Poppins:Bold',sans-serif] text-[#219653]">
                ₱{totalPrice}
              </span>
            </div>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-[#219653] text-white rounded-[10px] py-4 px-6 font-['Poppins:SemiBold',sans-serif] text-[16px] shadow-sm hover:bg-[#1a7741] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={nights === 0}
        >
          Confirm Booking
        </button>
      </form>
    </div>
  );
}
