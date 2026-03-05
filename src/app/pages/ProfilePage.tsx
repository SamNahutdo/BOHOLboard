import { User, Mail, Phone, MapPin, Building2, Calendar, Edit2, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface ProfilePageProps {
  userRole: 'owner' | 'boarder' | null;
}

export default function ProfilePage({ userRole }: ProfilePageProps) {
  const navigate = useNavigate();

  const userProfile = {
    name: 'Juan Dela Cruz',
    email: 'juan.delacruz@example.com',
    phone: '+63 912 345 6789',
    location: 'Tagbilaran City, Bohol',
    memberSince: 'January 2025',
    verified: true,
  };

  const stats = userRole === 'owner' 
    ? [
        { label: 'Active Properties', value: '3' },
        { label: 'Total Bookings', value: '45' },
        { label: 'Total Earnings', value: '₱125,000' },
        { label: 'Rating', value: '4.8 ⭐' },
      ]
    : [
        { label: 'Total Stays', value: '8' },
        { label: 'Upcoming', value: '2' },
        { label: 'Completed', value: '6' },
        { label: 'Saved', value: '12' },
      ];

  const handleLogout = () => {
    // In a real app, clear authentication
    navigate('/');
  };

  return (
    <div className="min-h-screen pb-8">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-[#219653] to-[#1a7741] rounded-[20px] p-8 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
              <User className="w-12 h-12 text-[#219653]" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-2">
                <h1 className="text-[28px] font-['Poppins:Bold',sans-serif]">
                  {userProfile.name}
                </h1>
                {userProfile.verified && (
                  <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-[13px] font-['Poppins:SemiBold',sans-serif] self-center">
                    ✓ Verified
                  </span>
                )}
              </div>
              <p className="text-[14px] font-['Poppins:Medium',sans-serif] opacity-90 mb-1">
                {userRole === 'owner' ? 'Property Owner' : 'Boarder'}
              </p>
              <p className="text-[13px] font-['Poppins:Regular',sans-serif] opacity-80">
                Member since {userProfile.memberSince}
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm px-5 py-2 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[14px] transition-colors">
              <Edit2 className="w-4 h-4" />
              Edit Profile
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-[15px] p-6 shadow-sm text-center">
              <p className="text-[24px] md:text-[28px] font-['Poppins:Bold',sans-serif] text-[#219653] mb-1">
                {stat.value}
              </p>
              <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-[15px] p-6 shadow-sm mb-6">
          <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-6">
            Personal Information
          </h2>

          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-[10px]">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#636e72]" />
              </div>
              <div>
                <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  Email Address
                </p>
                <p className="text-[15px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                  {userProfile.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-[10px]">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#636e72]" />
              </div>
              <div>
                <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  Phone Number
                </p>
                <p className="text-[15px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                  {userProfile.phone}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] rounded-[10px]">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-[#636e72]" />
              </div>
              <div>
                <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                  Location
                </p>
                <p className="text-[15px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                  {userProfile.location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Actions */}
        <div className="bg-white rounded-[15px] p-6 shadow-sm mb-6">
          <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
            Account Settings
          </h2>

          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-4 hover:bg-[#f8f9fa] rounded-[10px] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Edit2 className="w-5 h-5 text-[#636e72]" />
                <span className="text-[15px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Edit Profile
                </span>
              </div>
              <svg className="w-5 h-5 text-[#636e72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <button className="w-full flex items-center justify-between p-4 hover:bg-[#f8f9fa] rounded-[10px] transition-colors text-left">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#636e72]" />
                <span className="text-[15px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                  Notification Settings
                </span>
              </div>
              <svg className="w-5 h-5 text-[#636e72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {userRole === 'owner' && (
              <button className="w-full flex items-center justify-between p-4 hover:bg-[#f8f9fa] rounded-[10px] transition-colors text-left">
                <div className="flex items-center gap-3">
                  <Building2 className="w-5 h-5 text-[#636e72]" />
                  <span className="text-[15px] font-['Poppins:Medium',sans-serif] text-[#2d3436]">
                    Property Settings
                  </span>
                </div>
                <svg className="w-5 h-5 text-[#636e72]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Boarder Bookings Overview */}
        {userRole === 'boarder' && (
          <div className="bg-white rounded-[15px] p-6 shadow-sm mb-6">
            <h2 className="text-[20px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436] mb-4">
              My Bookings
            </h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#f8f9fa]">
                <div>
                  <p className="text-[15px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                    Tagbilaran City Boarding House
                  </p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Mar 15 – Mar 18 • 4 guests
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#219653]/10 text-[#219653] text-[12px] font-['Poppins:Medium',sans-serif]">
                  Confirmed
                </span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-[10px] bg-[#f8f9fa]">
                <div>
                  <p className="text-[15px] font-['Poppins:SemiBold',sans-serif] text-[#2d3436]">
                    University Lane Boarding House
                  </p>
                  <p className="text-[13px] font-['Poppins:Regular',sans-serif] text-[#636e72]">
                    Apr 20 – Apr 23 • 2 guests
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffc107]/10 text-[#f39c12] text-[12px] font-['Poppins:Medium',sans-serif]">
                  Pending
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center gap-2 bg-white hover:bg-[#f8f9fa] text-[#d63031] border-2 border-[#dfe6e9] py-3 rounded-[10px] font-['Poppins:SemiBold',sans-serif] text-[16px] transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Logout
        </button>
      </div>
    </div>
  );
}
